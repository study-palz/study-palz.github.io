import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { token, newPassword } = await req.json();
  const user = await prisma.user.findUnique({ where: { resetToken: token } });

  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
  }

  const hashed = await hash(newPassword, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashed,
      resetToken: null,
      resetTokenExpiresAt: null,
    },
  });

  return NextResponse.json({ ok: true });
}
