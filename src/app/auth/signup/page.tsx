'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../page1.module.css'; // Adjust if your CSS is elsewhere

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Signup failed');
        return;
      }

      router.push('/profile'); // Redirect to profile page after signup
    } catch (err) {
      console.error('Signup error:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  if (!isClient) return null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', alignItems: 'center' }}>
          {/* Left side: Welcome Panel */}
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Join the Squad!</h1>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>
              Create your Study-Palz account and start collaborating 🚀
            </p>
          </div>

          {/* Right side: Signup Form */}
          <div
            style={{
              flex: 1,
              background: 'var(--gray-alpha-100)',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                  style={{ width: '100%', padding: '0.5rem' }}
                />
              </div>

              {error && (
                <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>
              )}

              <button type="submit" className="primary" style={{ width: '100%' }}>
                Sign Up
              </button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              Already have an account?{' '}
              <Link className="secondary" href="/">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
