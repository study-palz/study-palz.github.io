// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

// 1. Annotate your options so TS knows all the callback signatures
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error('No user found');
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) throw new Error('Invalid password');
        return { id: String(user.id), email: user.email };
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },

  // 2. Make sure this matches the literal type NextAuth expects
  session: {
    strategy: 'jwt', // <-- this is the exact SessionStrategy literal
  },

  callbacks: {
    // now `token` is correctly typed as JWT & you won’t get `any`
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken  = account.access_token!;
        token.refreshToken = account.refresh_token!;
      }
      if (user) {
        token.id    = user.id;
        token.email = user.email!;
      }
      return token;
    },

    // and here `session` and `token` also pick up the right types
    async session({ session, token }) {
      if (session.user) {
        session.user.id           = token.id as string;
        session.accessToken       = token.accessToken as string;
        session.refreshToken      = token.refreshToken as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

// instantiate NextAuth _once_
const handler = NextAuth(authOptions);

// app‑router expects only the HTTP handlers as exports
export { handler as GET, handler as POST };
