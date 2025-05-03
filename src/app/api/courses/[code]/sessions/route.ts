import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const body = await req.json();
  const { topic, description, startTime, endTime } = body;

  const courseCode = decodeURIComponent(params.code).trim();
  console.log('Searching for course code:', courseCode);

  // Step 1: Find the course by its human-readable code
  const { data: course, error: courseError } = await supabaseAdmin
    .from('Course')
    .select('id')
    .eq('code', courseCode)
    .single();

  if (courseError || !course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // Step 2: Insert the session using the found course ID
  const { data, error } = await supabaseAdmin
    .from('StudySession')
    .insert([
      {
        topic,
        description,
        startTime,
        endTime,
        courseId: course.id,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
