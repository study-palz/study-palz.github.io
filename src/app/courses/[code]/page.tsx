
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getClassByCode } from '../../../lib/class-data';


export default async function CoursePage({ params }: { params: { code: string } }) {
  const course = await getClassByCode(params.code);

  if (!course) {
    return <div>Class not found</div>;
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
