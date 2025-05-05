import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const body = await req.json();
  const { topic, description, startTime, endTime } = body;

  const courseCode = decodeURIComponent(params.code).trim();
  const authHeader = req.headers.get('Authorization');
  const token = authHeader?.replace('Bearer ', '');

  console.log('▶️ Bearer token received:', token); // 🐛 DEBUG LOG

  if (!token) {
    return NextResponse.json({ error: 'No authorization token found' }, { status: 401 });
  }

  const {
    data: { user },
    error: userError
  } = await supabaseAdmin.auth.getUser(token);

  console.log('👤 User fetched from Supabase:', user); // 🐛 DEBUG LOG
  console.log('❌ User fetch error (if any):', userError); // 🐛 DEBUG LOG

  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: course, error: courseError } = await supabaseAdmin
    .from('Course')
    .select('id')
    .eq('code', courseCode)
    .single();

  if (courseError || !course) {
    console.error('❌ Course not found:', courseError);
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

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
    console.error('❌ Insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log('✅ Study session created:', data); // 🐛 DEBUG LOG
  return NextResponse.json(data);
}
