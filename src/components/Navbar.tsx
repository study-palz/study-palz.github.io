/* eslint-disable @next/next/no-img-element */
'use client';

import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css';

const NavBar: React.FC = () => {
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    if (!session?.user?.email) {
      setProfileImage(null);
      return;
    }

    const email = session.user.email;
    const fetchProfileImage = async () => {
      try {
        const res = await fetch(`/api/profile?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        setProfileImage(data.profileImage || null);
      } catch (error) {
        setProfileImage(null);
      }
    };

    fetchProfileImage();
  }, [session?.user?.email]);

  const hiddenRoutes = ['/auth/signup', '/auth/signin', '/auth/signout'];
  if (hiddenRoutes.includes(pathName || '')) {
    return null;
  }

  const handleSignOut = () => signOut({ callbackUrl: '/' });

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#080808' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src="/studypalzlogo.png" alt="StudyPalz Logo" height="100" width="200" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles['navbar-toggler-icon']} />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            <Nav.Link href="/" className="me-5" style={{ color: 'white', fontWeight: 'bold' }}>Home</Nav.Link>
            <Nav.Link href="/about" className="me-5" style={{ color: 'white', fontWeight: 'bold' }}>About</Nav.Link>
            <Nav.Link href="/contact" style={{ color: 'white', fontWeight: 'bold' }}>Contact</Nav.Link>

            {session && (
              <>
                <Nav.Link href="/calendar" active={pathName === '/calendar'} className="me-5 ms-5" style={{ color: 'white', fontWeight: 'bold' }}>Calendar</Nav.Link>
                <Nav.Link href="/leaderboard" active={pathName === '/leaderboard'} className="me-4 ms-3" style={{ color: 'white', fontWeight: 'bold' }}>Leaderboard</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            {status === 'loading' ? null : session ? (
              <>
                <Nav.Link href="/profile" className="me-3">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      width={36}
                      height={36}
                      style={{
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid white',
                      }}
                    />
                  ) : (
                    <PersonFill size={24} color="white" />
                  )}
                </Nav.Link>

                <Nav.Link href="/auth/change-password" className="me-3" style={{ color: 'white', fontWeight: 'bold' }}>
                  Change Password
                </Nav.Link>

                <Nav.Link onClick={handleSignOut} className="login-signup-btn" style={{ color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                  <BoxArrowRight className="me-1" />
                  Sign Out
                </Nav.Link>
              </>
            ) : (
              <div className="d-flex">
                <Nav.Link href="/auth/signin" className="login-signup-btn me-2">
                  <PersonFill /> Sign In
                </Nav.Link>
                <Nav.Link href="/auth/signup" className="login-signup-btn">
                  <PersonPlusFill /> Sign Up
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
