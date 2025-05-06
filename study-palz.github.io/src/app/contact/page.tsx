import React from 'react';

const Contact = () => (
  <div
    style={{
      minHeight: '70vh',
      background: 'linear-gradient(to right, #080808, #2a5298)',
      color: '#f0f6fc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}
  >
    <div
      style={{
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#161b22',
        padding: '3rem',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📬 Contact Us</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Have a question or want to get involved? Reach out through the platforms below!
      </p>

      <div style={{ fontSize: '1.1rem', lineHeight: '2' }}>
        <p>
          💬 <strong>Discord:</strong>{' '}
          <a
            href="https://discord.gg/U5mJ2RbG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
          >
            Join our Study-Palz Community
          </a>
        </p>
        <p>
          💻 <strong>GitHub:</strong>{' '}
          <a
            href="https://github.com/orgs/study-palz/people"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#58a6ff', textDecoration: 'none' }}
          >
            github.com/orgs/study-palz/people
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
