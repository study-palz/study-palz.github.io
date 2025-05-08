// src/app/courses/[code]/sessions/[sessionId]/confirmation/ConfirmationClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  code: string;
  sessionId: number;
  ownerId: number;
  initialAttendees: { id: number; name?: string; email: string }[];
  hasMarkedAttendance: boolean;
}

export default function ConfirmationClient({
  code,
  sessionId,
  ownerId,
  initialAttendees,
  hasMarkedAttendance,
}: Props) {
  const router = useRouter();
  const [attendees, setAttendees] = useState(initialAttendees);
  const [isJoining, setIsJoining] = useState(false);
  const [attendance, setAttendance] = useState<{ [id: number]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const joinOrLeave = async () => {
    setIsJoining(true);
    const isAttending = attendees.some((u) => u.id === ownerId);

    const method = isAttending ? 'DELETE' : 'POST';
    const url = `/api/courses/${encodeURIComponent(code)}/sessions/${sessionId}/${isAttending ? 'leave' : 'join'}`;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(isAttending ? { sessionId } : undefined),
    });

    if (!res.ok) {
      console.error(await res.json());
      setIsJoining(false);
      return;
    }

    if (isAttending) {
      setAttendees((prev) => prev.filter((u) => u.id !== ownerId));
    } else {
      setAttendees((prev) => [...prev, { id: ownerId, name: undefined, email: '' }]);
    }

    router.refresh();
    setIsJoining(false);
  };

  const handleAttendanceChange = (attendeeId: number, checked: boolean) => {
    setAttendance((prev) => ({ ...prev, [attendeeId]: checked }));
  };

  const submitAttendance = async () => {
    const attendeeIds = Object.entries(attendance)
      .filter(([_, checked]) => checked)
      .map(([id]) => Number(id));

    if (attendeeIds.length === 0) return;

    const res = await fetch(`/api/courses/${code}/sessions/${sessionId}/attendance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attendeeIds }),
    });

    if (!res.ok) {
      console.error('Failed to submit attendance');
    } else {
      setSubmitted(true);
    }
  };

  const isOwner = attendees.some((u) => u.id === ownerId);

  return (
    <div className="text-center mt-6">
      <button
        className={`btn ${isOwner ? 'btn-danger' : 'btn-primary'}`}
        onClick={joinOrLeave}
        disabled={isJoining}
      >
        {isOwner ? 'Leave Session' : 'Join Session'}
      </button>

      {!submitted && !hasMarkedAttendance && (
        <>
          <h2 className="text-white text-xl mt-8 mb-3">✅ Who attended?</h2>
          <div className="flex flex-col items-start gap-2 max-w-md mx-auto">
            {attendees.map((attendee) => (
              <label key={attendee.id} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={attendance[attendee.id] || false}
                  onChange={(e) => handleAttendanceChange(attendee.id, e.target.checked)}
                />
                {attendee.name ?? attendee.email}
              </label>
            ))}
          </div>
          <button className="btn btn-success mt-4" onClick={submitAttendance}>
            Submit Attendance
          </button>
        </>
      )}

      {submitted && (
        <p className="text-white-400 mt-4">Attendance recorded!</p>
      )}
    </div>
  );
}
