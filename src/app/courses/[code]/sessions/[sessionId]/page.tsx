
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import ConfirmationClient from './confirmation/ConfirmationClient'

export default async function SessionDetailPage({
  params,
}: {
  params: { code: string; sessionId: string }
}) {
  const id = Number(params.sessionId)

  const ss = await prisma.studySession.findUnique({
    where: { id },
    include: {
      course: true,                             
      owner:    { select: { id: true, email: true } },  
      attendees:{ select: { id: true, name: true, email: true } }, 
    
    },
  })

  if (!ss) {
    return <p className="text-center text-white py-5">Session not found.</p>
  }

  
  const start = new Date(ss.startTime)
  const end   = new Date(ss.endTime)
  const durMs = end.getTime() - start.getTime()
  const hrs   = Math.floor(durMs / 3_600_000)
  const mins  = Math.floor((durMs % 3_600_000) / 60_000)

  const attendeesForClient = ss.attendees.map((u) => ({
    id:    u.id,
    email: u.email,
    name:  u.name ?? undefined,
  }))

  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4">{ss.topic}</h1>
      <p className="mb-3">
        {ss.description
          ? ss.description
          : <em className="text-gray-500">No description</em>}
      </p>

      <p className="mb-4">
        📅 {format(start, 'PPp')} – {format(end, 'PPp')}<br/>
        ⏳ {hrs}h {mins}m
      </p>

      <ConfirmationClient
  code={params.code}
  sessionId={id}
  ownerId={ss.owner.id}
  initialAttendees={attendeesForClient}
  topic={ss.topic}
  description={ss.description ?? ''}
/>


      <div className="text-center mt-5">
      <Link href={`/courses/${ss.course.code}`} className="btn btn-outline-light">
  Back to {decodeURIComponent(ss.course.code)}
</Link>
      </div>
    </div>
  )
}
