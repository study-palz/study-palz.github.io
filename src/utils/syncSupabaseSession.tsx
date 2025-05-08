// src/utils/syncSupabaseSession.tsx
'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

type ExtendedSession = {
  accessToken?: string;
  refreshToken?: string;
};

export default function SyncSupabaseSession() {
  // tell TS that our session may have those two extra props
  const { data: rawSession } = useSession();
  const session = rawSession as (ExtendedSession & typeof rawSession);

  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session?.accessToken && session?.refreshToken) {
      supabase.auth.setSession({
        access_token: session.accessToken,
        refresh_token: session.refreshToken,
      });
    }
  }, [session, supabase]);

  return null;
}
