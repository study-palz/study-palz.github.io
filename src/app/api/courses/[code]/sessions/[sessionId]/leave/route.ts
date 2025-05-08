// src/app/api/courses/[code]/sessions/[sessionId]/leave/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';

export async function DELETE(
  _req: Request,
  { params }: { params: { sessionId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = Number(session.user.id);
  const sessionId = Number(params.sessionId);

  try {
    await prisma.studySession.update({
      where: { id: sessionId },
      data: {
        attendees: {
          disconnect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json({ left: true });
  } catch (error) {
    console.error('Error leaving session:', error);
    return NextResponse.json({ error: 'Failed to leave session' }, { status: 500 });
  }
}
