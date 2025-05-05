  'use client'

import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string | null
  points: number
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [showAll, setShowAll] = useState(false)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

useEffect(() => {
  fetch(`${baseUrl}/api/leaderboard`)
    .then((res) => res.json())
    .then((data) => {
      const validUsers = data.filter(
        (user: User) => user  .name !== null && user.name.trim() !== ''
      )
      setUsers(validUsers)
    })
    .catch((err) => console.error('Failed to fetch leaderboard:', err))
}, [])

  const visibleUsers = showAll ? users : users.slice(0, 10)

  return (
    <Container className="py-5 text-center">
      <h1 className="text-4xl text-white font-bold mb-6">🏅Leaderboard🏅</h1>
      <ListGroup>
        {visibleUsers.map((user, index) => (
          <ListGroupItem
            key={user.id}
            className="d-flex justify-content-between align-items-center bg-white"
          >
            <div>
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

