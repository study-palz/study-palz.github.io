// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/authOptions';

/* Create the handler once with shared options */
const handler = NextAuth(authOptions);

/* App‑Router requires exporting only HTTP methods */
export { handler as GET, handler as POST };
