// src/lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!  // This only works safely on the server
);

export default supabaseAdmin;
