'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {
  code: string;
  sessionId: number;
  ownerId: number;
  initialAttendees: { id: number; name?: string; email: string }[];
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
}: Props) {
  const { data: nextAuthSession } = useSession();
  const currentUserId = Number(nextAuthSession?.user?.id);
  const [attendees, setAttendees] = useState(initialAttendees);
  const [joined, setJoined] = useState(
    attendees.some((u) => u.id === currentUserId)
  );
  const router = useRouter();

  useEffect(() => {
    setJoined(attendees.some((u) => u.id === currentUserId));
  }, [attendees, currentUserId]);

  const toggleJoin = useCallback(async () => {
    const action = joined ? 'leave' : 'join';
    await fetch(`/api/courses/${code}/sessions/${sessionId}/${action}`, {
      method: 'POST',
    });
    const res = await fetch(`/api/courses/${code}/sessions/${sessionId}/attendees`);
    if (res.ok) {
      const updated = await res.json();
      setAttendees(updated);
    }
  }, [joined, code, sessionId]);

  const deleteSession = useCallback(async () => {
    if (!confirm('Are you sure you want to delete this session?')) return;
    const res = await fetch(
      `/api/courses/${code}/sessions/${sessionId}`,
      { method: 'DELETE' }
    );
    if (res.ok) {
      // <-- redirect back to the course page
      router.push(`/courses/${code}`);
    } else {
      alert('Failed to delete session');
    }
  }, [code, sessionId, router]);

  return (
    <div className="text-center">
      <button onClick={toggleJoin} className="btn btn-outline-light mb-3">
        {joined ? 'Leave Session' : 'Join Session'}
      </button>

      <div className="mt-4">
        <h5 className="text-white">Attendees ({attendees.length})</h5>
        <ul className="list-group list-group-flush">
          {attendees.map((u) => (
            <li key={u.id} className="list-group-item bg-dark text-white">
              {u.name || u.email}
            </li>
          ))}
        </ul>
      </div>

      {currentUserId === ownerId && (
        <div className="mt-4">
          <button onClick={deleteSession} className="btn btn-danger">
            Delete Session
          </button>
        </div>
      )}
    </div>
  );
}
