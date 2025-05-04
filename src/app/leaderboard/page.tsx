'use client'
import { Container, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  points: number
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Failed to fetch leaderboard:', err))
  }, [])

  const visibleUsers = showAll ? users : users.slice(0, 10)

  return (
    <Container className="py-5">
      <h1 className="text-4xl text-white font-bold mb-6 text-center">🏅Leaderboard🏅</h1>
      <ListGroup>
        {visibleUsers.map((user, index) => (
          <ListGroupItem
            key={user.id}
            className="d-flex justify-content-between align-items-center"
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

      {!showAll && users.length > 10 && (
        <div className="text-center mt-4">
          <Button variant="dark" onClick={() => setShowAll(true)}>
            Show More
          </Button>
        </div>
      )}
    </Container>
  )
}