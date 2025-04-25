// src/app/auth/forgot-password/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const schema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string }) => {
    await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setSubmitted(true);
  };

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '400px',
        margin: 'auto',
        color: 'white',              // default text color white
      }}
    >
      <h1 style={{ marginBottom: '1rem', color: 'white' }}>
        Forgot Password
      </h1>

      {submitted ? (
        <p>If that email exists, you’ll receive a reset link shortly.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="forgotEmail"
            style={{ display: 'block', marginBottom: '0.5rem', color: 'white' }}
          >
            Email address
          </label>
          <input
            id="forgotEmail"
            type="email"
            {...register('email')}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginBottom: errors.email ? '0.25rem' : '1rem',
              background: 'transparent',
              border: '1px solid white',
              borderRadius: '4px',
              color: 'white',          // input text white
            }}
          />
          {errors.email && (
            <p style={{ color: '#ff6b6b', marginBottom: '1rem' }}>
              {errors.email.message}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'white',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Send Reset Link
          </button>
        </form>
      )}

      <p style={{ marginTop: '1rem' }}>
        <Link href="/auth/signin">
          <span style={{ color: 'white', textDecoration: 'underline' }}>
            Back to login
          </span>
        </Link>
      </p>
    </div>
  );
}
