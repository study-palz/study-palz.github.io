import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email },
    include: { userProfile: true },
  });

  if (!user || !user.userProfile) return NextResponse.json(null);

  return NextResponse.json({
    firstName: user.userProfile.firstName,
    lastName: user.userProfile.lastName,
    profileImage: user.userProfile.profileImage,
    coursesTaken: user.userProfile.coursesTaken,
    coursesHelped: user.userProfile.coursesHelped,
  });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { email, firstName, lastName, profileImage, coursesTaken, coursesHelped } = body;

  if (!email) return NextResponse.json({ error: 'Missing email' }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

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
