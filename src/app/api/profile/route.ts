// @ts-nocheck
import { NextResponse }     from "next/server"
import { getServerSession } from "next-auth/next"
import type { Session }     from "next-auth"           
import { authOptions }      from "@/lib/authOptions"
import { prisma }           from "@/lib/prisma"

export async function GET(req: Request) {
  // annotate explicitly
  const session: any = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 })
  }

  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  })

  return NextResponse.json(profile)
}

export async function POST(req: Request) {
  const session: any = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 })
  }

  const data = await req.json()
  const upserted = await prisma.profile.upsert({
    where:  { email: session.user.email },
    create: { email: session.user.email, ...data },
    update: { ...data },
  })

  return NextResponse.json(upserted)
}
