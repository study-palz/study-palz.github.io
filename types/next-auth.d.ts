// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT as DefaultJWT }           from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      id:        string
      randomKey: string
    }

    // ← add these two properties:
    accessToken?:  string
    refreshToken?: string
  }

  interface User extends DefaultUser {
    id:        string
    randomKey: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id:        string
    randomKey: string
  }
}
