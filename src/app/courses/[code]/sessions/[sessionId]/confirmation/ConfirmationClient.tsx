'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

interface Attendee {
  id:    number
  name?: string
  email: string
}

interface Props {
  code: string
  sessionId: number
  ownerId: number
  initialAttendees: Attendee[]
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
}: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees)

  const amOwner     = session?.user?.id === String(ownerId)
  const amAttending = attendees.some(u => String(u.id) === session?.user?.id)

  const join = async () => {
    const res = await fetch(
      `/api/courses/${code}/sessions/${sessionId}/join`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    )
    if (res.ok && session) {
      setAttendees(a => [
        ...a,
        {
          id: Number(session.user.id),
          name: session.user.name ?? undefined,
          email: session.user.email!,
        },
      ])
      router.refresh()
    }
  }

  const leave = async () => {
    const res = await fetch(
      `/api/courses/${code}/sessions/${sessionId}/leave`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ sessionId }),
      }
    )
    if (res.ok && session) {
      setAttendees(a => a.filter(u => u.id !== Number(session.user.id)))
      router.refresh()
    }
  }

  const removeSession = async () => {
    try {
      const res = await fetch(
        `/api/courses/${code}/sessions`,
        {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ sessionId }),
        }
      )
      if (!res.ok) {
        console.error('Delete failed:', await res.text())
        return
      }
      // replace current URL with the course page
      router.replace(`/courses/${code}`)
    } catch (e) {
      console.error('Unexpected error deleting session:', e)
    }
  }

  return (
    <div className="text-center mt-4 space-x-2">
      {!session && (
        <p className="text-gray-400">Please sign in to join or leave</p>
      )}

      {session && !amAttending && (
        <button className="btn btn-primary" onClick={join}>
          Join Session
        </button>
      )}

      {session && amAttending && (
        <button className="btn btn-danger" onClick={leave}>
          Leave Session
        </button>
      )}

      {amOwner && (
        <button
          className="btn btn-outline-danger"
          onClick={removeSession}
        >
          Delete Session
        </button>
      )}
    </div>
  )
}
