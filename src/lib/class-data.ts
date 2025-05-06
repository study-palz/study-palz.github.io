import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function getClassByCode(code: string) {
  console.log('Requested code:', code)

  const { data, error } = await supabase
    .from('Course')
    .select('*')
    .eq('code', code)
    .single()

  if (error) {
    console.error('Supabase error:', error)
    return null
  }

  console.log('Fetched course:', data)
  return data
}