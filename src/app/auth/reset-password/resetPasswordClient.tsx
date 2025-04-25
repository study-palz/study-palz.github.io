'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { Card, Container, Button, Form, Row, Col } from 'react-bootstrap';

type ResetForm = { password: string; confirmPassword: string };

export default function ResetPasswordClient() {
  const router = useRouter();
  const params = useSearchParams();
  const token = params.get('token') ?? undefined;

  const [status, setStatus] = useState<
    'loading' | 'invalid' | 'ready' | 'success'
  >('loading');

  const schema = Yup.object({
    password: Yup.string().min(6, 'Min 6 chars').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetForm>({ resolver: yupResolver(schema) });

  useEffect(() => {
    if (!token) return;
    fetch(`/api/auth/validate-token?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((data) => setStatus(data.valid ? 'ready' : 'invalid'));
  }, [token]);

  const onSubmit = async (data: ResetForm) => {
    await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword: data.password }),
    });
    setStatus('success');
  };

  /* ---------- render states ----------------------------------------- */

  if (status === 'loading') return <p>Validating link…</p>;

  if (status === 'invalid')
    return (
      <p>
        Link is invalid or expired. <Link href="/auth/forgot-password">Try again</Link>
      </p>
    );

  if (status === 'success')
    return (
      <p>
        Password reset! <Link href="/auth/signin">Sign in</Link>
      </p>
    );

  /* ---------- main form --------------------------------------------- */

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="mb-4">Reset Password</h2>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register('password')}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register('confirmPassword')}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="w-100">
                  Reset Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
