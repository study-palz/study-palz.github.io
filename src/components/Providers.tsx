'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Providers({ children }: { children: ReactNode }) {
  const supabase = createClientComponentClient();

  return (
    <SessionProvider>
      <SessionContextProvider supabaseClient={supabase}>
        {children}
      </SessionContextProvider>
    </SessionProvider>
  );
}
