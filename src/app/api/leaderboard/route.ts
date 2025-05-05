import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic' // Vercel 캐싱 방지

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

    // 이름이 null인 경우 제외하고 응답 생성
    const response = users
      .map((user) => ({
        id: user.id,
        points: user.points,
        name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
      }))
      .filter((user) => user.name !== '') // 이름 없는 유저는 제외

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
