/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';

const About = () => (
  <div
    style={{
      minHeight: '100vh',
      backgroundImage: 'conic-gradient(from 0deg, #080808, #2a5298, #080808)',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '6rem 1rem 4rem', // extra top and bottom padding
      textAlign: 'center',
    }}
  >
    <div style={{ maxWidth: '800px', width: '100%' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About StudyPalz</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        <strong>StudyPalz</strong> is a student-driven platform created for ICS students at the University of Hawai‘i at Mānoa.
        Our goal is to make it easier for students to connect, collaborate, and succeed together by forming face-to-face study groups in <strong>ICSpace</strong>.
      </p>
      <p style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
        Whether you're preparing for exams, tackling tough projects, or just want to meet classmates in your course, StudyPalz helps you find the right people at the right time.
      </p>
    </div>
  </div>
);

export default About;
