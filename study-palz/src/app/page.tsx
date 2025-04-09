import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <Image
              src="/studypalzlogo_nobg.png" alt="Study Palz Logo"width={120} height={120} style={{ margin: '0 auto 1rem' }}
            />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome</h1>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>
              Login to reconnect with your study palz.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              background: 'var(--gray-alpha-100)',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Login</h2>
            <form>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label htmlFor="loginEmail">Email address</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Enter email"
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                />
              </div>
              <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
                <label htmlFor="loginPassword">Password</label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
                />
              </div>
              <button type="submit" className="primary" style={{ width: '100%' }}>
                Login
              </button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>
              Don&apos;t have an account?{' '}
              <Link className="secondary" href="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
