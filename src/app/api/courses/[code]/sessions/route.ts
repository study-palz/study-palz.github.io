import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/authOptions';
import { revalidatePath } from 'next/cache'

export async function POST(
  req: Request,
  { params }: { params: { code: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { topic, description, startTime, endTime } = await req.json()

  try {
    const created = await prisma.studySession.create({
      data: {
        topic,
        description,
        startTime: new Date(startTime),
        endTime:   new Date(endTime),
        owner:     { connect: { id: Number(session.user.id) } },
        course:    { connect: { code: params.code } },
      },
    })

    // 🚀 Invalidate the course page cache so it fetches fresh data
    revalidatePath(`/courses/${params.code}`)

    return NextResponse.json(created, { status: 201 })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { code: string } }
) {
  const session = await getServerSession(authOptions)
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { sessionId } = await req.json()
  try {
    await prisma.studySession.delete({ where: { id: sessionId } })

    // also bust the cache after deleting
    revalidatePath(`/courses/${params.code}`)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
