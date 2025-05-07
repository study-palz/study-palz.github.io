'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SyncSupabaseSession() {
  const { data: session } = useSession();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const syncSession = async () => {
      if (session?.accessToken) {
        await supabase.auth.setSession({
          access_token: session.accessToken,
          refresh_token: session.refreshToken ?? '',
        });
      }
    };
    syncSession();
  }, [session, supabase]);

  return null;
}