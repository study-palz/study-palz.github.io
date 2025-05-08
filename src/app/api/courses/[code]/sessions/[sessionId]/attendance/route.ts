// src/app/courses/[code]/sessions/[sessionId]/attendance/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(
  req: NextRequest,
  { params }: { params: { code: string; sessionId: string } }
) {
  try {
    const { attendeeIds }: { attendeeIds: number[] } = await req.json();
    const sessionId = Number(params.sessionId);

    if (!attendeeIds || attendeeIds.length === 0) {
      return NextResponse.json({ error: 'No attendees provided' }, { status: 400 });
    }

    const session = await prisma.studySession.findUnique({
      where: { id: sessionId },
      select: {
        startTime: true,
        endTime: true,
        topic: true,
      },
    });

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    const start = new Date(session.startTime);
    const end = new Date(session.endTime);
    const durationMinutes = Math.max(
      Math.floor((end.getTime() - start.getTime()) / 60000),
      1
    );

    const eligibleIds: number[] = [];

    for (const userId of attendeeIds) {
      const alreadyGiven = await prisma.pointHistory.findFirst({
        where: {
          userId,
          description: `Attended session: ${session.topic}`,
        },
      });

      if (!alreadyGiven) {
        eligibleIds.push(userId);
      }
    }

    if (eligibleIds.length === 0) {
      return NextResponse.json({ message: 'All attendees already marked as present' });
    }

    const updatePromises = eligibleIds.map((userId) =>
      prisma.$transaction([
        prisma.user.update({
          where: { id: userId },
          data: { points: { increment: durationMinutes } },
        }),
        prisma.pointHistory.create({
          data: {
            userId,
            points: durationMinutes,
            description: `Attended session: ${session.topic}`,
          },
        }),
      ])
    );

    await Promise.all(updatePromises);

    return NextResponse.json({ success: true, awarded: eligibleIds });
  } catch (err) {
    console.error('[ATTENDANCE ERROR]', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
