import { NextResponse } from 'next/server';
import supabaseAdmin from '@/lib/supabaseAdmin';

export async function GET(
  _req: Request,
  { params }: { params: { code: string; sessionId: string } }
) {
  const { code, sessionId } = params;

  const { data, error } = await supabaseAdmin
    .from('StudySession')
    .select('*')
    .eq('id', sessionId)
    .eq('courseId', code)
    .single();

  if (error) {
    console.error('Fetch session error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
