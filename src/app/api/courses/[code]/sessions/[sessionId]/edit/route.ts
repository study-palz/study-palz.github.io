import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';

export async function PUT(req: Request, { params }: { params: { sessionId: string } }) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const sessionId = Number(params.sessionId);

  try {
    const existing = await prisma.studySession.findUnique({
      where: { id: sessionId },
      include: { owner: true },
    });

    if (!existing || existing.owner.email !== session.user.email) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const updated = await prisma.studySession.update({
      where: { id: sessionId },
      data: {
        topic: body.topic,
        description: body.description,
        startTime: new Date(body.startTime),
        endTime: new Date(body.endTime),
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    console.error('[EditSessionError]', err);
    return NextResponse.json({ error: 'Failed to update session' }, { status: 500 });
  }
}
