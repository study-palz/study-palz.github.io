import Link from 'next/link';
import styles from '../page.module.css';

export default function Signup() {
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
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="signupName">Full Name</label>
                <input type="text" id="signupName" placeholder="Enter full name" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="signupMajor">Major</label>
                <input type="text" id="signupMajor" placeholder="Enter major" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="signupEmail">Email address</label>
                <input type="email" id="signupEmail" placeholder="Enter email" style={{ width: '100%', padding: '0.5rem' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="signupGender">Gender</label>
                <select id="signupGender" style={{ width: '100%', padding: '0.5rem' }}>
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
              </div>
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
