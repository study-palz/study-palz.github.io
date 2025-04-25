import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: { code: string };
}

const mockData: Record<string, { senseis: string[]; grasshoppers: string[] }> = {
  'ICS 101': {
    senseis: ['Alice A.', 'Bob B.'],
    grasshoppers: ['Carol C.', 'David D.'],
  },
};

export default function CourseDetail({ params }: Props) {
  const code = decodeURIComponent(params.code);
  const entry = mockData[code];

  if (!entry) {
    return notFound();
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{code}</h1>

      <section>
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
      </section>

      <section style={{ marginTop: '1.5rem' }}>
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
      </section>

      <p style={{ marginTop: '2rem' }}>
        <Link href="/courses" style={{ color: '#0070f3' }}>
          ← Back to courses
        </Link>
      </p>
    </div>
  );
}
