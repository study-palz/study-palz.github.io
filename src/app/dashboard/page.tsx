'use client';

import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // For redirecting

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Loading state while session is being fetched
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Redirect to login/signup page if user is not logged in
  if (!session) {
    router.push('/auth/signin'); // Redirect user to the login page
    return null; // Don't render the dashboard if not logged in
  }

  return (
    <main>
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h1>Welcome back, {session.user?.name || 'User'}!</h1>
            <p className="lead">Here’s your dashboard where you can manage your study sessions and more.</p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={6}>
            <Link href="/profile" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>👤 View/Edit Profile</Card.Title>
                  <Card.Text>Manage your courses, upload a profile picture, and more.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/calendar" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>📅 Study Sessions</Card.Title>
                  <Card.Text>Join study sessions or schedule a new one.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/leaderboard" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>🏆 Leaderboard</Card.Title>
                  <Card.Text>Check out the top students in ICSpace.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/analytics" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>📊 Analytics</Card.Title>
                  <Card.Text>Track your progress and see how you’re doing in ICSpace.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* Optionally, you can add a logout button */}
        <Row className="text-center mt-5">
          <Col>
            <Button
              variant="outline-danger"
              onClick={() => {
                // Handle logout
                router.push('/auth/signin'); // Redirect to login after logout
              }}
            >
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Dashboard;
