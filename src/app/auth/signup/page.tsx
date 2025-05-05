/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import styles from '../../page1.module.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
      } else {
        const signInRes = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });

        if (signInRes?.error) {
          setError('Error logging in. Please try again.');
        } else {
          window.location.href = '/';
        }
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
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
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>
              Join the Squad!
            </h1>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem', color: 'white' }}>
              Create your StudyPalz account and start collaborating 🚀
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

          {/* Right side: Signup Form with staggered animation for fields */}
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
              Sign Up
            </h2>
            <form onSubmit={handleSignup}>
              {/* Email Field */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                style={{ marginBottom: '1rem' }}
              >
                <label htmlFor="signupEmail">Email address</label>
                <input
                  type="email"
                  id="signupEmail"
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
                <label htmlFor="signupPassword">Password</label>
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="Enter password"
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
                Sign Up
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              Already have an account?{' '}
              <Link className="secondary" href="/auth/signin">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
