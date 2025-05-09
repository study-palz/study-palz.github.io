// src/app/courses/page.tsx
import Link from 'next/link'
import type { Course } from '../../lib/courses'
import { courseData as courseList } from '../../lib/courses'

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">ICS Courses</h1>

      <table
        className="
          max-w-3xl 
          mx-auto 
          table-auto 
          bg-black
          text-center 
          border border-white-700 
          rounded-lg 
          border-collapse
        "
      >
        <tbody>
          {courseList.map(({ code, title }: Course) => (
            <tr key={code}>
              <td className="px-4 py-2 border-b border-gray-700">
                <Link
                  href={`/courses/${encodeURIComponent(code)}`}
                  className="text-white underline hover:text-gray-300"
                >
                  {code}
                </Link>
              </td>
              <td className="px-4 py-2 text-gray-300 underline border-b border-gray-700">
                {title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
