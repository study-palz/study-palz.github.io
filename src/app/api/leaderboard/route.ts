// src/app/api/leaderboard/route.ts

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const leaderboard = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        points: true,
      },
      orderBy: {
        points: 'desc',
      },
    })

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error('[API ERROR] /api/leaderboard:', error)
    return NextResponse.json(
      { message: 'Failed to load leaderboard.' },
      { status: 500 }
    )
  }
}
