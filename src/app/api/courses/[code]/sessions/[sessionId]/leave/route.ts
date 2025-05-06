// src/app/api/courses/[code]/sessions/[sessionId]/leave/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(
  _req: Request,
  { params }: { params: { sessionId: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = Number(session.user.id);
  const id     = Number(params.sessionId);

  await prisma.studySession.update({
    where: { id },
    data: { attendees: { disconnect: { id: userId } } },
  });

  return NextResponse.json({ left: true });
}
