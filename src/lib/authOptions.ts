// src/lib/authOptions.ts

import NextAuth from "next-auth/next"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import { compare } from "bcrypt"

export const authOptions: NextAuthOptions = {
  // Use JWT-based sessions
  session: {
    strategy: "jwt",
  },

  // Our single credentials provider
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "you@example.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // credentials will be { email: string; password: string }
        if (!credentials?.email || !credentials.password) {
          return null
        }

        // 1) Find the user in your database
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) {
          return null
        }

        // 2) Verify their password
        const isValid = await compare(credentials.password, user.password)
        if (!isValid) {
          return null
        }

        // 3) Return an object that will be encoded into the JWT
        return {
          id:        String(user.id),
          email:     user.email,
          randomKey: user.role,
        }
      },
    }),
  ],

  // Copy randomKey ↔ session.user.randomKey
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id        = user.id
        token.randomKey = user.randomKey
      }
      return token
    },
    async session({ session, token }) {
      session.user.id        = token.id!
      session.user.randomKey = token.randomKey!
      return session
    },
  },

  // Custom sign-in / error pages (optional)
  pages: {
    signIn: "/auth/signin",
    error:  "/auth/error",
  },

  // Make sure this matches NEXTAUTH_SECRET in your .env
  secret: process.env.NEXTAUTH_SECRET,
}

// We also export a default NextAuth handler here in case you want to
// import it directly somewhere else, but your route file will do:
export default NextAuth(authOptions)
