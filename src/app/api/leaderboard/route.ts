// pages/api/leaderboard.ts
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'


export default async function handler(
) {
  const User = await prisma.user.findMany({
    orderBy: {
      points: 'desc',
    },
    select: {
      id: true,
      name: true,
      points: true,
    },
  })

}

export async function GET() {
    try {
      const users = await prisma.player.findMany({
        orderBy: { points: 'desc' },
      })
      return NextResponse.json(users)
    } catch (error) {
      console.error('Error fetching leaderboard:', error)
      return new NextResponse('Internal Server Error', { status: 500 })
    }
  }