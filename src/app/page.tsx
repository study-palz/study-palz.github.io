'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Col, Container, Row, Card, Form } from 'react-bootstrap';
import { useSession } from 'next-auth/react';

import type { Course } from '../lib/courses';
import { courseData as courses } from '../lib/courses';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const profileLink = session ? '/profile' : '/auth/signup';

  // ─── Search state ───────────────────────────────────────────────────────────
  const [query, setQuery] = useState('');
  const suggestions = query
    ? courses
        .filter(
          (c: Course) =>
            c.code.toLowerCase().includes(query.toLowerCase()) ||
            c.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const goToCourse = (code: string) => {
    router.push(`/courses/${encodeURIComponent(code)}`);
  };

  // ─── JSX ────────────────────────────────────────────────────────────────────
  return (
    <main>
      <Container id="landing-page" fluid className="py-5 text-center" style={{ color: 'white' }}>
        {/* Hero */}
        <Row className="mb-5">
          <Col>
            <h1>Welcome to StudyPalz</h1>
            <p className="lead">
              Connect with ICS students for live, face-to-face study groups in ICSpace!
            </p>
          </Col>
        </Row>

        {/* Search box / browse courses */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-4" style={{ backgroundColor: '#111', color: 'white' }}>
              <Card.Body>
                <Card.Title as="h2">📚 Browse ICS Courses</Card.Title>
                <Card.Text>Search by code or title, or view the full list:</Card.Text>

                <Form.Control
                  type="text"
                  placeholder="Search courses…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                    marginBottom: '1rem',
                  }}
                />

                {suggestions.length > 0 && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      maxHeight: '150px',
                      overflowY: 'auto',
                      border: '1px solid #444',
                      borderRadius: '4px',
                      marginBottom: '1rem',
                    }}
                  >
                    {suggestions.map((c) => (
                      <li
                        key={c.code}
                        onClick={() => goToCourse(c.code)}
                        style={{
                          padding: '0.5rem',
                          cursor: 'pointer',
                          borderBottom: '1px solid #333',
                        }}
                      >
                        <strong>{c.code}</strong> — {c.title}
                      </li>
                    ))}
                  </ul>
                )}

                <Link href="/courses" style={{ color: '#0af', textDecoration: 'underline' }}>
                  Or click here to view the full ICS course list →
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick-action cards */}
        <Row className="g-4">
          <Col md={6}>
            <Link href={profileLink} passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>📄 Set up your profile</Card.Title>
                  <Card.Text>Pick your courses, upload a head-shot, choose your roles.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/calendar" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>📅 View or schedule study sessions</Card.Title>
                  <Card.Text>Join a session now or plan one later in ICSpace.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/leaderboard" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>🏆 Earn points & level up</Card.Title>
                  <Card.Text>Help others, join sessions, and get recognized!</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={6}>
            <Link href="/leaderboard" passHref>
              <Card className="h-100 p-3 hover-shadow cursor-pointer">
                <Card.Body>
                  <Card.Title>📊 Check the leaderboard</Card.Title>
                  <Card.Text>See who’s leading the StudyPalz community.</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
