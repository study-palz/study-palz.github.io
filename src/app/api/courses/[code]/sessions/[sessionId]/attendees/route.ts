// src/app/api/courses/[code]/sessions/[sessionId]/attendees/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { authOptions } from '@/lib/authOptions';

export async function GET(
  _req: Request,
  { params }: { params: { code: string; sessionId: string } }
) {
  const sid = Number(params.sessionId);

  try {
    const session = await prisma.studySession.findUnique({
      where: { id: sid },
      select: {
        attendees: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    return NextResponse.json(session.attendees);
  } catch (err: any) {
    console.error('Error fetching attendees:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
