/* eslint-disable @next/next/no-img-element */

'use client';

import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [coursesTaken, setCoursesTaken] = useState('');
  const [coursesHelped, setCoursesHelped] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/profile?email=${session.user.email}`)
        .then(res => res.json())
        .then(data => {
          if (data) {
            setFirstName(data.firstName || '');
            setLastName(data.lastName || '');
            setProfileImage(data.profileImage || '');
            setCoursesTaken(data.coursesTaken || '');
            setCoursesHelped(data.coursesHelped || '');
          }
        });
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session?.user?.email,
        firstName,
        lastName,
        profileImage,
        coursesTaken,
        coursesHelped,
      }),
    });

    if (res.ok) {
      setMessage('✅ Profile updated successfully!');
    } else {
      setMessage('❌ Failed to update profile.');
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <Container
        className="shadow-lg"
        style={{
          color: 'white',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '15px',
          padding: '2rem',
        }}
      >
        <h2 className="mb-4 text-center">👤 Your Profile</h2>

        {message && <Alert variant="info">{message}</Alert>}

        <div className="row align-items-start">
          {/* Left column: Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Headshot Preview"
                style={{
                  width: '100%',
                  maxWidth: '250px',
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid #00ffe7',
                  boxShadow: '0 0 30px #00ffe7',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            ) : (
              <div
                style={{
                  width: '250px',
                  height: '250px',
                  borderRadius: '50%',
                  backgroundColor: '#444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: '#aaa',
                  boxShadow: '0 0 30px rgba(0,0,0,0.3)',
                }}
              >
                No Image
              </div>
            )}

            <Form.Group className="mt-3">
              <Form.Label>Upload Headshot</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </div>

          {/* Right column: Form */}
          <div className="col-md-8">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Courses you’re taking (Grasshopper)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. ICS 314, ICS 321"
                  value={coursesTaken}
                  onChange={(e) => setCoursesTaken(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Courses you can help with (Sensei)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. ICS 111, ICS 211"
                  value={coursesHelped}
                  onChange={(e) => setCoursesHelped(e.target.value)}
                />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit">
                  Save Profile
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
