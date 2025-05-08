export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { format } from 'date-fns'
import { prisma } from '@/lib/prisma'
import { getClassByCode } from '@/lib/class-data'

export default async function CoursePage({
  params,
}: {
  params: { code: string }
}) {
  const code = decodeURIComponent(params.code)

  const staticCourse = await getClassByCode(code)
  if (!staticCourse) {
    return (
      <p className="text-center mt-10 text-red-500">
        Class not found
      </p>
    )
  }

  const now = new Date()
  const upcoming = await prisma.studySession.findMany({
    where: {
      course: { code },
      startTime: { gte: now },
    },
    include: { attendees: { select: { id: true } } },
    orderBy: { startTime: 'asc' },
    take: 5,
  })

  console.log(
    '[CoursePage]',
    'now=', now.toISOString(),
    'sessions=', upcoming.map((s) => s.startTime.toISOString())
  )

  return (
    <div className="container py-5 text-white">
      <h1 className="text-4xl font-bold">{staticCourse.title}</h1>
      <p className="mt-2 text-gray-400">{staticCourse.description}</p>

      <div className="mt-6">
        <Link href={`/courses/${params.code}/create-session`}>
          <button className="btn btn-primary">+ Create New Session</button>
        </Link>
      </div>

      <h2 className="mt-8 mb-4 text-2xl">Upcoming Sessions</h2>
      {upcoming.length === 0 ? (
        <p className="text-gray-500">No upcoming sessions.</p>
      ) : (
        <div className="row g-4">
          {upcoming.map((s) => (
            <div key={s.id} className="col-12 col-md-6 col-lg-4">
              <div className="card bg-dark border-secondary h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-white">{s.topic}</h5>
                  <p className="card-text text-gray-300 mb-2 text-sm">
                    {format(s.startTime, 'PPP p')}
                  </p>
                  <p className="card-text text-gray-400 flex-grow-1">
                    {s.attendees.length} going
                  </p>
                  <Link
                    href={`/courses/${params.code}/sessions/${s.id}`}
                    className="btn btn-outline-light mt-auto"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}