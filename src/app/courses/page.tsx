// src/app/courses/page.tsx
import Link from 'next/link';
import { courses } from '../../lib/courses';

export default function CoursesPage() {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>ICS Courses</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {courses.map(({ code, title }) => (
          <li key={code} style={{ margin: '0.5rem 0' }}>
            <Link
              href={`/courses/${encodeURIComponent(code)}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {code} — {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
