import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/authOptions'
import { revalidatePath } from 'next/cache'
import { SessionStatus } from '@prisma/client' // ✅ Import the enum

export async function POST(
  req: Request,
  { params }: { params: { code: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    console.error('❌ Unauthorized request: session.user.id missing')
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { topic, description, startTime, endTime } = await req.json()

  console.log('📥 Incoming create session request:')
  console.log('User:', session.user)
  console.log('Params:', params)
  console.log('Body:', { topic, description, startTime, endTime })

  try {
    const course = await prisma.course.findUnique({
      where: { code: params.code },
    })

    if (!course) {
      console.error('❌ Course not found for code:', params.code)
      return NextResponse.json({ error: 'Course not found' }, { status: 404 })
    }

    const created = await prisma.studySession.create({
      data: {
        topic,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        owner: { connect: { id: Number(session.user.id) } },
        course: { connect: { id: course.id } },
        status: SessionStatus.PENDING, // ✅ Use enum value safely
      },
    })

    console.log('✅ Session created:', created)

    revalidatePath(`/courses/${params.code}`)

    return NextResponse.json(created, { status: 201 })
  } catch (err: any) {
    console.error('❌ Error creating session:', err.message)
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

    revalidatePath(`/courses/${params.code}`)

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (err: any) {
    console.error('❌ Error deleting session:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
