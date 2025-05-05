// ✅ NO 'use client' here — it's a Server Component

import { getClassByCode } from '@/lib/class-data';
import Link from 'next/link';

export default async function CoursePage({ params }: { params: { code: string } }) {
  const decodedCode = decodeURIComponent(params.code);
  const course = await getClassByCode(decodedCode);

  console.log('Requested code:', decodedCode);
  console.log('Fetched course:', course);

  if (!course) {
    return <div className="text-center mt-10 text-red-500">Class not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-2 text-gray-600">{course.description}</p>

      <div className="mt-6">
        <Link href={`/courses/${params.code}/create-session`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Create New Session
          </button>
        </Link>
      </div>
    </div>
  );
}
