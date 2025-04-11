import { NextResponse } from 'next/server';
import { verifyUser } from '@/lib/dbActions';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    const user = await verifyUser(email, password);

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // For now, just confirm login
    return NextResponse.json({ success: true, user: { email: user.email } }, { status: 200 });

    // Later, you can issue a JWT or session cookie here
  } catch (err) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
