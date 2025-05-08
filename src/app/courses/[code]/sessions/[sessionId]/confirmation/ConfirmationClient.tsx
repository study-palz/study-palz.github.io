'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

interface Attendee {
  id: number
  name?: string
  email: string
}

interface Props {
  code: string
  sessionId: number
  ownerId: number
  initialAttendees: Attendee[]
  topic: string
  description?: string
  hasMarkedAttendance?: boolean
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
  topic,
  description,
  hasMarkedAttendance,
}: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  const currentUserId = session?.user?.id

  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees)
  const [attendance, setAttendance] = useState<{ [id: number]: boolean }>({})
  const [marked, setMarked] = useState<Set<number>>(new Set())
  const [submitted, setSubmitted] = useState(false)
  const attendeeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initialAttendance: { [id: number]: boolean } = {}
    initialAttendees.forEach((attendee) => {
      initialAttendance[attendee.id] = false
    })
    setAttendance(initialAttendance)
  }, [initialAttendees])

  const handleAttendanceChange = (attendeeId: number, checked: boolean) => {
    setAttendance((prev) => ({ ...prev, [attendeeId]: checked }))
  }

  const submitAttendance = async () => {
    const selectedIds = Object.entries(attendance)
      .filter(([_, checked]) => checked)
      .map(([id]) => Number(id))

    if (selectedIds.length === 0) return

    const res = await fetch(`/api/courses/${code}/sessions/${sessionId}/attendance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attendeeIds: selectedIds }),
    })

    if (!res.ok) {
      console.error('Failed to submit attendance')
      return
    }

    // Add submitted IDs to marked set
    setMarked((prev) => new Set({...prev, ...selectedIds}))

    // Reset checkboxes
    setAttendance((prev) => {
      const updated = { ...prev }
      selectedIds.forEach((id) => (updated[id] = false))
      return updated
    })

    // Hide UI only if all attendees are marked
    const totalAttendeeIds = attendees.map((a) => a.id).filter((id) => id !== Number(currentUserId))
    const allMarked = totalAttendeeIds.every((id) => marked.has(id) || selectedIds.includes(id))
    if (allMarked) {
      setSubmitted(true)
    }
  }

  return (
    <div className="text-center mt-6">
      <div className="bg-light p-4 rounded mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="mb-3">{topic}</h3>
        {description && <p className="text-muted">{description}</p>}
        <span className="badge bg-primary">
          {attendees.length} attendee{attendees.length !== 1 ? 's' : ''}
        </span>

        <div className="mt-3 d-flex flex-column gap-2">
          {ownerId === Number(currentUserId) && (
            <Link href={`/courses/${code}/sessions/${sessionId}/edit`} className="btn btn-warning">
              Edit Session
            </Link>
          )}
        </div>
      </div>

      <div ref={attendeeRef} className="bg-dark p-3 rounded text-white mx-auto mb-5" style={{ maxWidth: '500px' }}>
        <h5 className="mb-3">🧑‍🤝‍🧑 Attendees</h5>
        {attendees.length === 0 ? (
          <p className="text-secondary">No one has joined yet.</p>
        ) : (
          <ul className="list-unstyled">
            {attendees.map((user) => (
              <li key={user.id} className="mb-1">
                • {user.name || user.email || `User #${user.id}`}
                {user.id === ownerId && ' (Owner)'}
              </li>
            ))}
          </ul>
        )}
      </div>

      {!submitted && (
        <>
          <p className="text-white text-xl mt-7 mb-3">Who Showed Up?</p>
          <div className="flex flex-col items-start gap-2 max-w-md mx-auto">
            {attendees
              .filter((attendee) => !marked.has(attendee.id))
              .map((attendee) => {
                const isCurrentUser = attendee.id === Number(currentUserId)
                return (
                  <div key={attendee.id} className="flex items-center gap-2 text-white">
                    <label className="flex items-center gap-2 text-white">
                      <input
                        type="checkbox"
                        checked={attendance[attendee.id] || false}
                        onChange={(e) => handleAttendanceChange(attendee.id, e.target.checked)}
                        disabled={isCurrentUser}
                      />
                      {attendee.name ?? attendee.email} {isCurrentUser && '(You)'}
                    </label>
                  </div>
                )
              })}
          </div>
          {attendees.filter((a) => !marked.has(a.id)).length > 0 && (
            <button className="btn btn-success mt-4" onClick={submitAttendance}>
              Submit Attendance
            </button>
          )}
        </>
      )}

      {submitted && <p className="text-white text-xl mt-7 mb-3">✅ Attendance complete!</p>}
    </div>
  )
}
