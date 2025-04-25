// This is the dynamic course detail page.
// It lives at “/courses/[code]”.

import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props {
  params: { code: string }
}

const mockData: Record<string, { senseis: string[]; grasshoppers: string[] }> = {
  // replace with real DB fetch later...
  'ICS 101': {
    senseis: [],
    grasshoppers: [],
  },
  'ICS 101A': {
    senseis: [],
    grasshoppers: [],
  },
  // …etc
}

export default function CourseDetail({ params }: Props) {
  const code = decodeURIComponent(params.code)
  const entry = mockData[code]

  if (!entry) {
    // tells Next to render the built-in 404
    notFound()
  }

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>{code}</h1>

      <h2>Senseis</h2>
      {entry.senseis.length > 0 ? (
        <ul>
          {entry.senseis.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No senseis yet.</p>
      )}

      <h2>Grasshoppers</h2>
      {entry.grasshoppers.length > 0 ? (
        <ul>
          {entry.grasshoppers.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No grasshoppers yet.</p>
      )}

      <p>
        <Link href="/courses">← Back to courses</Link>
      </p>
    </div>
  )
}
