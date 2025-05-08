'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
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
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
  topic,
  description,
}: Props) {
  const router = useRouter()
  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const attendeeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/auth/session')
      .then((res) => res.json())
      .then((data) => {
        if (data?.user?.id) {
          setCurrentUserId(Number(data.user.id))
        }
      })
      .catch((err) => console.error('Session fetch failed:', err))
  }, [])

  const isAttending = attendees.some((u) => u.id === currentUserId)
  const isOwner = currentUserId === ownerId

  const scrollToAttendees = () => {
    attendeeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const fetchAttendees = async () => {
    const res = await fetch(`/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/attendees`)
    if (res.ok) {
      const updated = await res.json()
      setAttendees(updated)
    } else {
      console.error('[Attendee Fetch Error]', await res.text())
    }
  }

  const handleJoinOrLeave = async () => {
    setIsLoading(true)
    const method = isAttending ? 'DELETE' : 'POST'
    const action = isAttending ? 'leave' : 'join'

    const res = await fetch(`/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/${action}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })

    if (!res.ok) {
      console.error('[Join/Leave Error]', await res.text())
      setIsLoading(false)
      return
    }

    await fetchAttendees()
    scrollToAttendees()
    router.refresh()
    setIsLoading(false)
    setShowConfirmModal(false)
  }

  const handleDeleteSession = async () => {
    setIsLoading(true)
    const res = await fetch(`/api/courses/${encodeURIComponent(code)}/sessions`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ sessionId }),
    })

    if (!res.ok) {
      console.error('[Delete Error]', await res.text())
      setIsLoading(false)
      return
    }

    router.push(`/courses/${code}`)
    router.refresh()
  }

  return (
    <div className="text-center mt-6">
      {/* Session Info */}
      <div className="bg-light p-4 rounded mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h3 className="mb-3">{topic}</h3>
        {description && <p className="text-muted">{description}</p>}
        <span className="badge bg-primary">
          {attendees.length} attendee{attendees.length !== 1 ? 's' : ''}
        </span>

        <div className="mt-3 d-flex flex-column gap-2">
          {isOwner && (
            <Link href={`/courses/${code}/sessions/${sessionId}/edit`} className="btn btn-warning">
              Edit Session
            </Link>
          )}
          {isOwner && (
            <button className="btn btn-danger" onClick={() => setShowDeleteConfirm(true)}>
              Delete Session
            </button>
          )}
        </div>
      </div>

      {isAttending ? (
        <button className="btn btn-danger mb-4" onClick={() => setShowConfirmModal(true)} disabled={isLoading}>
          Leave Session
        </button>
      ) : (
        <button className="btn btn-primary mb-4" onClick={handleJoinOrLeave} disabled={isLoading}>
          Join Session
        </button>
      )}
      {showConfirmModal && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Leave</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowConfirmModal(false)} />
              </div>
              <div className="modal-body">Are you sure you want to leave this session?</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleJoinOrLeave} disabled={isLoading}>Yes, Leave</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDeleteConfirm && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">Delete Session</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowDeleteConfirm(false)} />
              </div>
              <div className="modal-body">This action cannot be undone. Delete this session?</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleDeleteSession} disabled={isLoading}>Yes, Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div ref={attendeeRef} className="bg-dark p-3 rounded text-white mx-auto" style={{ maxWidth: '500px' }}>
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
    </div>
  )
}
