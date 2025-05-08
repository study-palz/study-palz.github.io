// src/app/courses/[code]/sessions/[sessionId]/edit/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import EditSessionForm from './EditSessionForm';

export default async function EditSessionPage({
  params,
}: {
  params: { code: string; sessionId: string };
}) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/auth/signin');

  const sessionId = Number(params.sessionId);
  const code = decodeURIComponent(params.code);

  const studySession = await prisma.studySession.findUnique({
    where: { id: sessionId },
    include: { owner: true },
  });

  if (!studySession || studySession.owner.email !== session.user.email) {
    redirect(`/courses/${code}`);
  }

  return (
    <EditSessionForm
      code={code}
      sessionId={sessionId}
      topic={studySession.topic}
      description={studySession.description ?? ''}
      startTime={studySession.startTime.toISOString().slice(0, 16)}
      endTime={studySession.endTime.toISOString().slice(0, 16)}
    />
  );
}
