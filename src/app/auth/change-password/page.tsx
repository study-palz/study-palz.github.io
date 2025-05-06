'use client';

import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';
import { changePassword, ChangePasswordInput } from '@/lib/dbActions';
import { motion } from 'framer-motion';
import swal from 'sweetalert';
import { LockFill } from 'react-bootstrap-icons';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';

type ChangePasswordForm = {
  oldpassword: string;
  password: string;
  confirmPassword: string;
};

const schema = Yup.object().shape({
  oldpassword: Yup.string().required('Current password is required'),
  password: Yup.string().min(6).max(40).required('New password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const ChangePasswordPage = () => {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    setLoading(true);
    try {
      const payload: ChangePasswordInput = {
        email: session?.user?.email || '',
        ...data,
      };
      await changePassword(payload);
      swal('Success', 'Password changed successfully!', 'success');
      reset();
    } catch (error) {
      swal('Error', 'There was an issue changing your password. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #080808, #2a5298)',
        minHeight: '100vh',
        padding: '3rem 1rem',
      }}
    >
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <h2 className="text-center mb-4 text-primary">
                  <LockFill className="me-2" />
                  Change Password
                </h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter current password"
                      {...register('oldpassword')}
                      isInvalid={!!errors.oldpassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.oldpassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter new password"
                      {...register('password')}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm new password"
                      {...register('confirmPassword')}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Button variant="warning" onClick={() => reset()} disabled={loading}>
                      Reset
                    </Button>
                    <Button type="submit" variant="primary" disabled={loading}>
                      {loading ? (
                        <>
                          <Spinner size="sm" animation="border" className="me-2" />
                          Saving...
                        </>
                      ) : (
                        'Change Password'
                      )}
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default ChangePasswordPage;
