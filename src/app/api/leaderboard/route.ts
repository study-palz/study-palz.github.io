// app/api/leaderboard/route.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const users = await prisma.user.findMany({
    orderBy: { points: 'desc' },
    include: { userProfile: true }
  })

  const leaderboard = users
    .filter(user => user.userProfile?.firstName || user.userProfile?.lastName)
    .map(user => ({
      id: user.id,
      name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
      points: user.points
    }))

  return NextResponse.json(leaderboard)
}
