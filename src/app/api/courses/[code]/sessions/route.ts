import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const body = await req.json();
  const { topic, description, startTime, endTime } = body;

  const courseCode = decodeURIComponent(params.code).trim();
  const authHeader = req.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  if (!token) {
    return NextResponse.json({ error: 'No authorization token found' }, { status: 401 });
  }

  const {
    data: { user },
    error: userError
  } = await supabaseAdmin.auth.getUser(token);

  if (userError || !user) {
    return NextResponse.json({ error: 'Unable to retrieve user from token' }, { status: 401 });
  }

  // Step 1: Find the course by its human-readable code
  const { data: course, error: courseError } = await supabaseAdmin
    .from('Course')
    .select('id')
    .eq('code', courseCode)
    .single();

  if (courseError || !course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // Step 2: Insert the session using the found course ID and user ID
  const { data, error } = await supabaseAdmin
    .from('StudySession')
    .insert([
      {
        topic,
        description,
        startTime,
        endTime,
        courseId: course.id,
        ownerId: user.id, // ✅ FIXED: use authenticated user ID
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
