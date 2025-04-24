import { NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { addHours } from 'date-fns';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      const token = randomBytes(32).toString('hex');
      const expiresAt = addHours(new Date(), 1);

      await prisma.user.update({
        where: { email },
        data: { resetToken: token, resetTokenExpiresAt: expiresAt },
      });

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: +(process.env.SMTP_PORT ?? 587),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${token}`;
      await transporter.sendMail({
        to: email,
        from: process.env.SMTP_FROM,
        subject: 'Study Palz Password Reset',
        html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. This link expires in 1 hour.</p>`,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Forgot-password error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
