// src/app/courses/[code]/sessions/[sessionId]/confirmation/ConfirmationClient.tsx
'use client'

import { useState } from 'react'
import { useRouter }   from 'next/navigation'
import { useSession }  from 'next-auth/react'

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
  const router  = useRouter()
  const { data: session } = useSession()
  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees)
  const amOwner = session?.user?.id === String(ownerId)

  const revalidateCourse = () => {
    // This will force Next.js to re‐fetch and re‐render /courses/[code]
    router.refresh()
  }

  const join = async () => {
    const res = await fetch(
      `/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/join`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    )
    if (res.ok) {
      // Optimistically add current user to the list
      setAttendees((a) => [
        ...a,
        { id: Number(session!.user.id), name: session!.user.name ?? undefined, email: session!.user.email! },
      ])
      revalidateCourse()
    } else {
      console.error('Join failed', await res.json())
    }
  }

  const leave = async () => {
    const res = await fetch(
      `/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/leave`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ sessionId }),
      }
    )
    if (res.ok) {
      setAttendees((a) => a.filter((u) => u.id !== Number(session!.user.id)))
      revalidateCourse()
    } else {
      console.error('Leave failed', await res.json())
    }
  }

  const removeSession = async () => {
    const res = await fetch(
      `/api/courses/${encodeURIComponent(code)}/sessions`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ sessionId }),
      }
    )
    if (res.ok) {
      // after deleting the entire session, send user back to course page
      router.push(`/courses/${encodeURIComponent(code)}`)
    } else {
      console.error('Delete session failed', await res.json())
    }
  }

  const amAttending = attendees.some((u) => String(u.id) === session?.user?.id)

  return (
    <div className="text-center mt-4">
      {!session && <p className="text-gray-400">Please sign in to join.</p>}

      {session && !amAttending && (
        <button
          onClick={join}
          className="btn btn-primary"
        >
          Join Session
        </button>
      )}

      {session && amAttending && (
        <button
          onClick={leave}
          className="btn btn-danger"
        >
          Leave Session
        </button>
      )}

      {amOwner && (
        <button
          onClick={removeSession}
          className="btn btn-outline-danger ml-2"
        >
          Delete Session
        </button>
      )}
    </div>
  )
}
