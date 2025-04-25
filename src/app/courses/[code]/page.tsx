// src/app/courses/[code]/page.tsx
import { prisma } from '../../../lib/prisma'
import Link from 'next/link'

interface Props { params: { code: string } }

export default async function CourseDetail({ params }: Props) {
  const code = decodeURIComponent(params.code)

  const course = await prisma.course.findUnique({
    where: { code },
    include: {
      roles: {
        include: { user: true },                
        orderBy: { isSensei: 'desc' },          
      },
    },
  })

  if (!course) {
    return <p style={{ padding: '2rem', color: 'white' }}>Course not found</p>
  }

  const senseis = course.roles.filter(r => r.isSensei).map(r => r.user.name || r.user.email)
  const grasshoppers = course.roles.filter(r => !r.isSensei).map(r => r.user.name || r.user.email)

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>{course.code} — {course.title}</h1>

      <section>
        <h2>Senseis</h2>
        {senseis.length ? (
          <ul>
            {senseis.map(name => <li key={name}>{name}</li>)}
          </ul>
        ) : (
          <p>No senseis yet.</p>
        )}
      </section>

      <section>
        <h2>Grasshoppers</h2>
        {grasshoppers.length ? (
          <ul>
            {grasshoppers.map(name => <li key={name}>{name}</li>)}
          </ul>
        ) : (
          <p>No grasshoppers yet.</p>
        )}
      </section>

      <p><Link href="/courses">← Back to courses</Link></p>
    </div>
  )
}
