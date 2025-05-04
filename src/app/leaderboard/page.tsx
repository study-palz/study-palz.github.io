// pages/leaderboard.tsx
'use client'
import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  points: number
}

export default function Leaderboard() {
  const [user, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/leaderboard/route.ts')
      .then((res) => res.json())
      .then(setUsers)
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Leaderboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Rank</th>
            <th style={{ textAlign: 'left', padding: '0.5rem' }}>Name</th>
            <th style={{ textAlign: 'right', padding: '0.5rem' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={user.id}>
              <td style={{ padding: '0.5rem' }}>{index + 1}</td>
              <td style={{ padding: '0.5rem' }}>{user.name}</td>
              <td style={{ padding: '0.5rem', textAlign: 'right' }}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}