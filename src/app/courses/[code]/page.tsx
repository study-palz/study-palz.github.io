// src/app/courses/[code]/page.tsx
export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { format } from 'date-fns'
import { prisma } from '@/lib/prisma'

export default async function CoursePage({
  params,
}: {
  params: { code: string }
}) {
  const code = decodeURIComponent(params.code)

  // --- fetch the course itself from the DB ---
  const course = await prisma.course.findUnique({
    where: { code },
    select: {
      code: true,
      title: true,
    },
  })
  if (!course) {
    return (
      <p className="text-center mt-10 text-red-500">
        Class not found
      </p>
    )
  }

  // --- fetch the next 5 upcoming sessions ---
  const now = new Date()
  const upcoming = await prisma.studySession.findMany({
    where: {
      course: { code },
      startTime: { gte: now },      // note `gte` so anything >= now shows up
    },
    include: {
      attendees: { select: { id: true } },
    },
    orderBy: { startTime: 'asc' },
    take: 5,
  })

  return (
    <div className="container py-5 text-white">
      {/* Course header */}
      <h1 className="text-4xl font-bold">{course.title}</h1>

      <div className="mt-6">
        <Link
          href={`/courses/${encodeURIComponent(code)}/create-session`}
          className="btn btn-primary"
        >
          + Create New Session
        </Link>
      </div>

      {/* Upcoming Sessions */}
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
                    href={`/courses/${encodeURIComponent(code)}/sessions/${s.id}`}
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
