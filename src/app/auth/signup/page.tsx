/* eslint-disable max-len */
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../page1.module.css';

export default function Signup() {
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
  <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>Join the Squad!</h1>
  <p style={{ fontSize: '1.125rem', marginTop: '1rem', color: 'white' }}>
    Create your Study-Palz account and start collaborating 🚀
          </p>
          </div>

          {/* Right side: Signup Form */}
          <div
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
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>Sign Up</h2>
            <form>
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor="signupEmail">Email address</label>
    <input
      type="email"
      id="signupEmail"
      placeholder="Enter email"
      style={{ width: '100%', padding: '0.5rem' }}
    />
  </div>
  <div style={{ marginBottom: '1rem' }}>
    <label htmlFor="signupPassword">Password</label>
    <input
      type="password"
      id="signupPassword"
      placeholder="Enter password"
      style={{ width: '100%', padding: '0.5rem' }}
    />
  </div>
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
          </div>
        </div>
      </main>
    </div>
  );
}
