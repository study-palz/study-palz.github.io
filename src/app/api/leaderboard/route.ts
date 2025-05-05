import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export async function GET() {
  const prisma = new PrismaClient()

  try {
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
    })

    const formattedUsers = users.map((user) => ({
      id: user.id,
      name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
      points: user.points,
      profileImage: user.userProfile?.profileImage ?? '/default-profile.png',
    }))

    return NextResponse.json(formattedUsers)
  } catch (error) {
    console.error('Leaderboard API error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
