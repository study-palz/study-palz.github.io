/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [profileImage, setProfileImage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Fetch user profile on load
  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/profile?email=${session.user.email}`)
        .then(res => res.json())
        .then(data => {
          if (data) {
            setProfileImage(data.profileImage || '');
            setFirstName(data.firstName || '');
            setLastName(data.lastName || '');
          }
        });
    }
  }, [session]);

  // Handle image upload + preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setProfileImage(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let uploadedImageUrl = profileImage;

    // Simulate upload (replace with actual upload logic, e.g. Cloudinary or S3)
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await uploadRes.json();
      uploadedImageUrl = data.url; // Returned image URL
    }

    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session?.user?.email,
        profileImage: uploadedImageUrl,
        firstName,
        lastName,
      }),
    });

    if (res.ok) {
      setMessage('✅ Profile saved successfully!');

      // Refresh session so navbar updates profile image
      await update({ image: uploadedImageUrl });
    } else {
      setMessage('❌ Something went wrong.');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #1e3c72, #2a5298)',
        padding: '2rem',
      }}
    >
      <Container
        style={{
          background: 'rgba(255, 255, 255, 0.07)',
          borderRadius: '15px',
          padding: '2rem',
          color: 'white',
          maxWidth: '900px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h2 className="text-center mb-4">🧑‍💻 Create Your Profile</h2>
        {message && <Alert variant="info">{message}</Alert>}

        <Row>
          {/* Left: Image Uploader */}
          <Col md={5} className="text-center mb-4 mb-md-0">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Preview"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #00ffe7',
                  boxShadow: '0 0 15px #00ffe7',
                }}
              />
            ) : (
              <div
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  backgroundColor: '#444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#aaa',
                }}
              >
                Upload Image
              </div>
            )}

            <Form.Group className="mt-3">
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Form.Group>
          </Col>

          {/* Right: Info Form */}
          <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                />
              </Form.Group>

              <div className="text-end">
                <Button type="submit" variant="primary">
                  Save Profile
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
