import { NextResponse } from 'next/server';
import { isBefore } from 'date-fns';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get('token') || '';
  const user = await prisma.user.findUnique({ where: { resetToken: token } });
  const valid = !!(user && user.resetTokenExpiresAt && isBefore(new Date(), user.resetTokenExpiresAt));
  return NextResponse.json({ valid });
}
