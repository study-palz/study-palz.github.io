// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcrypt';

export const authOptions: NextAuthOptions = {
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
        // Returning these props becomes `user` in our callbacks
        return { id: String(user.id), email: user.email };
      },
    }),
    // …add other providers here if any…
  ],

  pages: {
    signIn: '/auth/signin',
    error:  '/auth/error',
  },

  session: { strategy: 'jwt' },

  callbacks: {
    /**
     * jwt() runs when a JWT is created or updated.
     * On initial sign in, `account` is populated, so we stash those tokens.
     * We also put `user.id` onto the token so we can retrieve it later.
     */
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

    /**
     * session() runs whenever `useSession()` or `getSession()` is called.
     * Here we pull our values off the JWT (`token`) and onto `session`.
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id           = token.id as string;
        session.accessToken       = token.accessToken as string;
        session.refreshToken      = token.refreshToken as string;
      }
      return session;
    },
  },

  // ensure you have NEXTAUTH_SECRET in your env
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
