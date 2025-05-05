import { Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import { prisma } from '@/lib/prisma'

export default async function LeaderboardPage() {
  const users = await prisma.user.findMany({
    where: {
      userProfile: {
        NOT: {
          firstName: null,
        },
      },
    },
    select: {
      id: true,
      points: true,
      userProfile: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
    orderBy: {
      points: 'desc',
    },
  })

  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: `${user.userProfile?.firstName ?? ''} ${user.userProfile?.lastName ?? ''}`.trim(),
    points: user.points,
  }))

  const hasMore = formattedUsers.length > 10
  const visibleUsers = formattedUsers.slice(0, 10)

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
    </Container>
  )
}
