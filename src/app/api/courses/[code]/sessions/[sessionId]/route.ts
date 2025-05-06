// src/app/api/courses/[code]/sessions/[sessionId]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/authOptions';


export async function DELETE(
  _req: Request,
  { params }: { params: { code: string; sessionId: string } }
) {
  // 1) only the session owner can delete
  const nextAuth = await getServerSession(authOptions);
  const userId = Number(nextAuth?.user?.id);
  const sid    = Number(params.sessionId);

  // make sure it exists and belongs to you
  const ss = await prisma.studySession.findUnique({
    where: { id: sid },
    select: { ownerId: true }
  });
  if (!ss) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  if (ss.ownerId !== userId) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // 2) actually delete it
  await prisma.studySession.delete({ where: { id: sid } });

  return NextResponse.json({ deleted: true });
}
