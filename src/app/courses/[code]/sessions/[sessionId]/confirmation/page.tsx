// src/app/courses/[code]/sessions/[sessionId]/confirmation/page.tsx
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import ConfirmationClient from './ConfirmationClient'

interface Props {
  params: { code: string; sessionId: string }
}

export default async function ConfirmationPage({ params }: Props) {
  const id = Number(params.sessionId)

  const ss = await prisma.studySession.findUnique({
    where: { id },
    include: {
      course: true,
      owner: { select: { id: true, email: true } },
      attendees: { select: { id: true, name: true, email: true } },
    },
  })

  if (!ss) {
    return (
      <div className="container py-5">
        <p className="text-center text-white">Session not found.</p>
      </div>
    )
  }

  const {
    course,
    topic,
    description,
    startTime,
    endTime,
    owner,
    attendees,
    id: createdId,
  } = ss

  const start = new Date(startTime)
  const end = new Date(endTime)
  const ms = end.getTime() - start.getTime()
  const hrs = Math.floor(ms / 36e5)
  const mins = Math.floor((ms % 36e5) / 6e4)

  const attendeesForClient = attendees.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name ?? undefined,
  }))

  const pointRecord = await prisma.pointHistory.findFirst({
    where: {
      userId: owner.id,
      description: `Attended session: ${topic}`,
    },
  })

  const hasMarkedAttendance = !!pointRecord

  return (
    <div className="container py-5">
      <h1 className="text-white text-center mb-4">🎉 Session Created!</h1>

      <p className="text-white text-center mb-3">
        {description ? description : <em className="text-gray-400">No description provided.</em>}
      </p>

      <p className="text-white text-center mb-2">
        Your <strong>{course.code}</strong> session “<em>{topic}</em>” has been scheduled.
      </p>

      <p className="text-white text-center mb-4">
        📅 {format(start, 'PPp')} – {format(end, 'PPp')}
        <br />
        ⏳ Duration: {hrs}h {mins}m
      </p>

      <p className="text-white text-center mb-4">
        Confirmation number:{' '}
        <span className="font-mono text-lg text-blue-300">#{createdId}</span>
      </p>

      <ConfirmationClient
        code={params.code}
        sessionId={createdId}
        ownerId={owner.id}
        initialAttendees={attendeesForClient}
        hasMarkedAttendance={hasMarkedAttendance}
      />

      <div className="text-center mt-5">
        <Link href={`/courses/${course.code}`} className="btn btn-outline-light">
          Back to {course.code}
        </Link>
      </div>
    </div>
  )
}
