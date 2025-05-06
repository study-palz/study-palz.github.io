import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

/* ------------------------------------------------------------------ */
/* 1️⃣  Define all NextAuth options (typed)                             */
/* ------------------------------------------------------------------ */
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email:    { label: 'Email',    type: 'email'    },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) throw new Error('No user found');

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error('Invalid password');

        return { id: String(user.id), email: user.email };
      },
    }),
  ],

  pages: {
    signIn: '/auth/signin',
    error:  '/auth/error',
  },

  session: {
    strategy: 'jwt',          // required literal
  },

  callbacks: {
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

    async session({ session, token }) {
      if (session.user) {
        session.user.id      = token.id as string;
        session.accessToken  = token.accessToken  as string;
        session.refreshToken = token.refreshToken as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

/* ------------------------------------------------------------------ */
/* 2️⃣  Instantiate once and export                                    */
/* ------------------------------------------------------------------ */
const handler = NextAuth(authOptions);

/* Next.js App Router expects HTTP handlers plus any shared constants */
export { handler as GET, handler as POST, authOptions };
