// app/api/profile/route.ts
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const profile = await prisma.userProfile.findUnique({
    where: { userId: user.id },
  });

  return NextResponse.json(profile);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req, ...authOptions });

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const { firstName, lastName, profileImage, coursesTaken, coursesHelped } = await req.json();

  const profile = await prisma.userProfile.upsert({
    where: { userId: user.id },
    update: {
      firstName,
      lastName,
      profileImage,
      coursesTaken,
      coursesHelped,
    },
    create: {
      userId: user.id,
      firstName,
      lastName,
      profileImage,
      coursesTaken,
      coursesHelped,
    },
  });

  return NextResponse.json(profile);
}