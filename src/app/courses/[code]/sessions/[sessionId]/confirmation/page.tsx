// src/app/courses/[code]/sessions/[sessionId]/page.tsx
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import ConfirmationClient from './ConfirmationClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

interface Props {
  params: { code: string; sessionId: string }
}

export default async function ConfirmationPage({ params }: Props) {
  const sessionId = Number(params.sessionId)

  const [session, userSession] = await Promise.all([
    prisma.studySession.findUnique({
      where: { id: sessionId },
      include: {
        course: true,
        owner: { select: { id: true, email: true } },
        attendees: { select: { id: true, name: true, email: true } },
      },
    }),
    getServerSession(authOptions),
  ])

  if (!session) {
    return (
      <div className="container py-5">
        <p className="text-center text-white">Session not found.</p>
      </div>
    )
  }

  const start = new Date(session.startTime)
  const end = new Date(session.endTime)
  const ms = end.getTime() - start.getTime()
  const hrs = Math.floor(ms / 36e5)
  const mins = Math.floor((ms % 36e5) / 6e4)

  const attendeesForClient = session.attendees.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name ?? undefined,
  }))

  const currentUserId = userSession?.user?.id
  let hasMarkedAttendance = false

  if (currentUserId) {
    const userIdNum = parseInt(currentUserId);

    const existingPoints = await prisma.pointHistory.findFirst({
      where: {
        userId: userIdNum,
        description: {
          contains: `Session #${sessionId}`,
        },
      },
    });

    hasMarkedAttendance = !!existingPoints
  }

  return (
    <div className="container py-5">
      <h1 className="text-white text-center mb-4">🎉 Session Created!</h1>

      <p className="text-white text-center mb-3">
        {session.description
          ? session.description
          : <em className="text-gray-400">No description provided.</em>}
      </p>

      <p className="text-white text-center mb-2">
        Your <strong>{session.course.code}</strong> session “<em>{session.topic}</em>” has been scheduled.
      </p>

      <p className="text-white text-center mb-4">
        📅 {format(start, 'PPp')} – {format(end, 'PPp')}<br />
        ⏳ Duration: {hrs}h {mins}m
      </p>

      <p className="text-white text-center mb-4">
        Confirmation number:{' '}
        <span className="font-mono text-lg text-blue-300">#{session.id}</span>
      </p>

      <ConfirmationClient
        code={params.code}
        sessionId={session.id}
        ownerId={session.owner.id}
        initialAttendees={attendeesForClient}
        hasMarkedAttendance={hasMarkedAttendance}
      />

      <div className="text-center mt-5">
        <Link href={`/courses/${session.course.code}`} className="btn btn-outline-light">
          Back to {session.course.code}
        </Link>
      </div>
    </div>
  )
}
