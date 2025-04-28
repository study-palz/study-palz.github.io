'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';

// Define ProfileData type
type ProfileData = {
  profileImage: string;
  firstName: string;
  lastName: string;
  coursesTaken: string;
  coursesHelped: string;
};

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [profileImage, setProfileImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [coursesTaken, setCoursesTaken] = useState('');
  const [coursesHelped, setCoursesHelped] = useState('');
  const [message, setMessage] = useState('');
  
  // Profile data state, typed with ProfileData or null
  const [savedData, setSavedData] = useState<ProfileData | null>(null);

  // Fetch user profile on load
  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(`/api/profile?email=${session.user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setProfileImage(data.profileImage || '');
          setFirstName(data.firstName || '');
          setLastName(data.lastName || '');
          setCoursesTaken(data.coursesTaken || '');
          setCoursesHelped(data.coursesHelped || '');
          setSavedData({
            profileImage: data.profileImage || '',
            firstName: data.firstName || '',
            lastName: data.lastName || '',
            coursesTaken: data.coursesTaken || '',
            coursesHelped: data.coursesHelped || '',
          });
        }
      });
  }, [session]);

  // Handle profile submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: session?.user?.email,
        profileImage,
        firstName,
        lastName,
        coursesTaken,
        coursesHelped,
      }),
    });

    if (res.ok) {
      setMessage('✅ Profile saved!');
      setSavedData({
        profileImage,
        firstName,
        lastName,
        coursesTaken,
        coursesHelped,
      });

      // Refresh session so navbar updates profile image
      await update({ image: profileImage });
    } else {
      setMessage('❌ Failed to save profile');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right,  #080808, #2a5298)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <Container style={{
        background: 'rgba(255, 255, 255, 0.07)',
        borderRadius: '15px',
        padding: '2rem',
        color: 'white',
        maxWidth: '1000px',
        backdropFilter: 'blur(10px)',
      }}>
        <h2 className="text-center mb-4">🧑‍💻 Your Profile</h2>
        {message && <Alert variant="info">{message}</Alert>}

        <Row>
          <Col md={5} className="text-center mb-4 mb-md-0">
            {profileImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={profileImage} alt="Preview"
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
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                backgroundColor: '#444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#aaa'
              }}>Image Preview</div>
            )}

            <Form.Group className="mt-3">
              <Form.Label>Profile Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://example.com/photo.jpg"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
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

              <Form.Group className="mb-3">
                <Form.Label>Courses Taken</Form.Label>
                <Form.Control
                  type="text"
                  value={coursesTaken}
                  onChange={(e) => setCoursesTaken(e.target.value)}
                  placeholder="ICS 314, ICS 321"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Courses You Can Help With</Form.Label>
                <Form.Control
                  type="text"
                  value={coursesHelped}
                  onChange={(e) => setCoursesHelped(e.target.value)}
                  placeholder="ICS 111, ICS 211"
                />
              </Form.Group>

              <div className="text-end">
                <Button type="submit" variant="primary">Save Profile</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
