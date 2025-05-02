import { NextResponse } from 'next/server';
import supabaseAdmin from '../../../../../lib/supabaseAdmin';

export async function POST(req: Request, { params }: { params: { code: string } }) {
  const body = await req.json();
  const { topic, description, startTime, endTime } = body;

  const { data, error } = await supabaseAdmin
    .from('StudySession')
    .insert([
      {
        topic,
        description,
        startTime,
        endTime,
        courseId: params.code,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Insert error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data); // includes the session ID
}
