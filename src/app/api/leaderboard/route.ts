// app/api/leaderboard/route.ts
import { prisma } from '@/lib/prisma'
import { retry } from '@/lib/retry'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await retry(() =>
      prisma.user.findMany({
        where: {
          userProfile: {
            NOT: {
              firstName: null,
            },
          },
        },
        select: {
          id: true,
          points: true,
          userProfile: {
            select: {
              firstName: true,
              lastName: true,
              profileImage: true,
            },
          },
        },
        orderBy: {
          points: 'desc',
        },
      })
    )

    const formatted = users.map(user => ({
      id: user.id,
      name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
      profileImage: user.userProfile?.profileImage ?? '/default-profile.png',
      points: user.points,
    }))

    return NextResponse.json(formatted)
  } catch (err) {
    console.error('Leaderboard API error:', err)
    return new NextResponse('Failed to load leaderboard', { status: 500 })
  }
}
