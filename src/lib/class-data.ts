// src/lib/class-data.ts
import supabaseAdmin from './supabaseAdmin';

export async function getClassByCode(code: string) {
  const { data, error } = await supabaseAdmin
    .from('Course')
    .select('*')
    .eq('code', code)
    .single();

  if (error) {
    console.error('Error fetching course:', error);
    return null;
  }

  return data;
}
