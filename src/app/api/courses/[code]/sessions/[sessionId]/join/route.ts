import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/lib/authOptions';
export async function POST(
  _req: Request,
  { params }: { params: { code: string; sessionId: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const userId = Number(session.user.id)
  const sid    = Number(params.sessionId)

  try {
    const already = await prisma.studySession.findFirst({
      where: { id: sid, attendees: { some: { id: userId } } }
    })

    if (already) {
      await prisma.studySession.update({
        where: { id: sid },
        data:  { attendees: { disconnect: { id: userId } } }
      })
    } else {
      await prisma.studySession.update({
        where: { id: sid },
        data:  { attendees: { connect: { id: userId } } }
      })
    }
    return NextResponse.json({ joined: !already })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
