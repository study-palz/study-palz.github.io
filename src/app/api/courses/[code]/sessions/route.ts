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

  // Step 1: Get user from token
  const {
    data: { user },
    error: userError
  } = await supabaseAdmin.auth.getUser(token);

  if (userError || !user) {
    console.error('Failed to retrieve user from token:', userError);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Step 2: Get course ID
  const { data: course, error: courseError } = await supabaseAdmin
    .from('Course')
    .select('id')
    .eq('code', courseCode)
    .single();

  if (courseError || !course) {
    console.error('Course not found:', courseError);
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  // Step 3: Insert study session
  const { data, error } = await supabaseAdmin
    .from('StudySession')
    .insert([
      {
        topic,
        description,
        startTime,
        endTime,
        courseId: course.id,
        ownerId: user.id
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
