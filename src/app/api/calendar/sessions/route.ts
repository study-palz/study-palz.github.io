import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userId = Number(session.user.id);

    const sessions = await prisma.studySession.findMany({
      where: {
        attendees: {
          some: { id: userId },
        },
      },
      include: {
        course: true,
      },
    });

    const events = sessions.map((s) => ({
      id: String(s.id), // <-- must be string for FullCalendar
      title: `${s.course.code}: ${s.topic}`,
      start: s.startTime.toISOString(),
      end: s.endTime.toISOString(),
      allDay: false,
    }));

    return NextResponse.json(events);
  } catch (err: any) {
    console.error('[Calendar Fetch Error]', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
