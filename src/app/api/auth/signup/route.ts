import { NextResponse } from 'next/server';
import { createUser } from '@/lib/dbActions';
import { prisma } from '@/lib/prisma'; // Make sure you can access the Prisma client

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // 🔍 Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    // ✅ Create new user
    await createUser({ email, password });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error('Signup error:', error);

    // Catch Prisma unique constraint error if check above somehow fails
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    }

    return NextResponse.json({ error: 'Signup failed' }, { status: 500 });
  }
}
