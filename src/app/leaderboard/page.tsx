'use client'

import { Container, ListGroup, ListGroupItem, Image, Button, Spinner } from 'react-bootstrap'
import { useEffect, useState } from 'react'

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
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="light" />
      </Container>
    )
  }

  return (
    <Container className="py-5 text-center">
      <h1 className="text-4xl text-white font-bold mb-6">🏅Leaderboard🏅</h1>
      <ListGroup>
        {visibleUsers.map((user, index) => (
          <ListGroupItem
            key={user.id}
            className="d-flex justify-content-between align-items-center bg-white"
          >
            <div className="d-flex align-items-center gap-2">
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
          </ListGroupItem>
        ))}
      </ListGroup>

      {users.length > 10 && (
        <Button variant="light" className="mt-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      )}
    </Container>
  )
}
