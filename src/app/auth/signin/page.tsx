'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../page1.module.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error || 'Login failed, please try again.');
      } else {
        window.location.href = '/';
      }
    } catch {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Image
              src="/studypalzlogo.png"
              alt="Study Palz Logo"
              width={200}
              height={120}
              style={{ margin: '0 auto 1rem' }}
            />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>Welcome</h1>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem', color: 'white' }}>
              Login to reconnect with your study palz.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link
                href="/"
                style={{
                  color: '#00bfff',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                }}
              >
                ← Back to Home
              </Link>
            </p>
          </div>

          {/* Right side: Sign In Form with staggered animation for fields */}
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 12,
              bounce: 0.3,
            }}
            style={{
              flex: 1,
              background: '#ffffff',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>
              Login
            </h2>
            <form onSubmit={handleLogin}>
              {/* Email Field */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                style={{ marginBottom: '1rem' }}
              >
                <label htmlFor="loginEmail">Email address</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
                style={{ marginBottom: '1rem' }}
              >
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </motion.div>

              {error && (
                <p style={{ color: 'red', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {error}
                </p>
              )}
              <button type="submit" className="primary" style={{ width: '100%' }}>
                Login
              </button>

              {/* Forgot password link */}
              <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                <Link href="/auth/forgot-password" className="secondary">
                  Forgot your password?
                </Link>
              </p>
            </form>

            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              Don&apos;t have an account?{' '}
              <Link className="secondary" href="/auth/signup">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
