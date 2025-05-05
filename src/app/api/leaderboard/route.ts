import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        points: 'desc',
      },
      include: {
        userProfile: true, // UserProfileRelation
      },
    })

    const response = users
      .map((user) => ({
        id: user.id,
        points: user.points,
        name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
      }))
      .filter((user) => user.name !== '')

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
