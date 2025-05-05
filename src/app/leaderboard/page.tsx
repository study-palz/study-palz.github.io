'use client'

import { useEffect, useState } from 'react'
import { Image, Button, Spinner } from 'react-bootstrap'

const DEFAULT_IMAGE_URL = '/default-profile.png'

type User = {
  id: number
  name: string
  points: number
  profileImage: string
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading leaderboard:', err)
        setLoading(false)
      })
  }, [])

  const visibleUsers = showAll ? users : users.slice(0, 10)

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1a1a1a',
      }}>
        <Spinner animation="border" variant="light" />
      </div>
    )
  }

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '1rem',
      width: '80%',
      maxWidth: '900px',
      margin: '2rem auto',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#111',
        marginBottom: '2rem'
      }}>
        🏅Leaderboard🏅
      </h1>

      <div>
        {visibleUsers.map((user, index) => (
          <div
            key={user.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#f8f9fa',
              padding: '0.75rem 1rem',
              borderRadius: '0.75rem',
              marginBottom: '0.75rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Image
                src={user.profileImage || DEFAULT_IMAGE_URL}
                roundedCircle
                width={32}
                height={32}
                alt={`${user.name}'s profile`}
              />
              <strong>{index + 1}. {user.name}</strong>
            </div>
            <div>
              <span>{user.points} pts</span>
            </div>
          </div>
        ))}
      </div>

      {users.length > 10 && (
        <Button
          variant="light"
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1.25rem'
          }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </div>
  )
}
