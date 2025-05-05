// app/api/leaderboard/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const DEFAULT_IMAGE_URL = '/default-profile.png'

export const dynamic = 'force-dynamic'

export async function GET() {
  const users = await prisma.user.findMany({
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
    take: 100,
  })

  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
    points: user.points,
    profileImage: user.userProfile?.profileImage || DEFAULT_IMAGE_URL,
  }))

  return NextResponse.json(formattedUsers)
}
