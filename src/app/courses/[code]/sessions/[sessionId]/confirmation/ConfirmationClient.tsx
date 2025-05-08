// src/app/courses/[code]/sessions/[sessionId]/confirmation/ConfirmationClient.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  code: string
  sessionId: number
  ownerId: number
  initialAttendees: { id: number; name?: string; email: string }[]
  hasMarkedAttendance?: boolean
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
  hasMarkedAttendance,
}: Props) {
  const router = useRouter()
  const [attendees, setAttendees] = useState(initialAttendees)
  const [isJoining, setIsJoining] = useState(false)
  const [attendance, setAttendance] = useState<{ [id: number]: boolean }>({})
  const [submitted, setSubmitted] = useState(false)

  const joinOrLeave = async () => {
    setIsJoining(true)
    const isAttending = attendees.some((u) => u.id === ownerId)

    const method = isAttending ? 'DELETE' : 'POST'
    const url = `/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/${isAttending ? 'leave' : 'join'}`

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(isAttending ? { sessionId } : undefined),
    })

    if (!res.ok) {
      console.error(await res.json())
      setIsJoining(false)
      return
    }

    if (isAttending) {
      setAttendees((prev) => prev.filter((u) => u.id !== ownerId))
    } else {
      setAttendees((prev) => [...prev, { id: ownerId, name: undefined, email: '' }])
    }

    router.refresh()
    setIsJoining(false)
  }

  const handleAttendanceChange = (attendeeId: number, checked: boolean) => {
    setAttendance((prev) => ({ ...prev, [attendeeId]: checked }))
  }

  const handleSubmitAttendance = async () => {
    const promises = Object.entries(attendance)
      .filter(([_, checked]) => checked)
      .map(([id]) =>
        fetch(`/api/courses/${code}/sessions/${sessionId}/attendance`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ attendeeId: Number(id), attended: true }),
        })
      )

    await Promise.all(promises)
    setSubmitted(true)
    router.refresh()
  }

  return (
    <div className="text-center mt-6">
      <button
        className={`btn ${attendees.some((u) => u.id === ownerId) ? 'btn-danger' : 'btn-primary'}`}
        onClick={joinOrLeave}
        disabled={isJoining}
      >
        {attendees.some((u) => u.id === ownerId) ? 'Leave Session' : 'Join Session'}
      </button>

      <div className="mt-5">
        {hasMarkedAttendance || submitted ? (
          <p className="text-success fw-bold">✅ Attendance Submitted!</p>
        ) : (
          <>
            <h5 className="text-white mb-3">Who attended?</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmitAttendance()
              }}
            >
              <div className="d-flex flex-column align-items-start mb-3">
                {attendees.map((attendee) => (
                  <label key={attendee.id} className="form-check-label text-white mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={attendance[attendee.id] || false}
                      onChange={(e) => handleAttendanceChange(attendee.id, e.target.checked)}
                    />
                    {attendee.name || attendee.email}
                  </label>
                ))}
              </div>
              <button type="submit" className="btn btn-success">
                Submit Attendance
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
