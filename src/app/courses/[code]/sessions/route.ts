import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function POST(req: NextRequest, { params }: { params: { code: string } }) {
  const body = await req.json();
  const { topic, description, startTime, endTime, ownerId } = body;

  try {
    const course = await prisma.course.findUnique({
      where: { code: params.code },
    });

    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }

    const session = await prisma.studySession.create({
      data: {
        topic,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        owner: { connect: { id: ownerId } },
        course: { connect: { id: course.id } },
      },
    });

    return NextResponse.json(session, { status: 201 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[POST /sessions] Failed:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
