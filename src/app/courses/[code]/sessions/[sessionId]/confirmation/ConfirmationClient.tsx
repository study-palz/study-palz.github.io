// src/app/courses/[code]/sessions/[sessionId]/confirmation/ConfirmationClient.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const router = useRouter();
  const [attendees, setAttendees] = useState(initialAttendees);
  const [isJoining, setIsJoining] = useState(false);

  const joinOrLeave = async () => {
    setIsJoining(true);
    const isAttending = attendees.some((u) => u.id === ownerId);

    const method = isAttending ? 'DELETE' : 'POST';
    const url = `/api/courses/${encodeURIComponent(
      code
    )}/sessions/${sessionId}/${isAttending ? 'leave' : 'join'}`;

    const res = await fetch(url, {
      method,
      credentials: 'include',        // ← include the next-auth cookie
      headers: { 'Content-Type': 'application/json' },
      // DELETE doesn’t need a body, so we only JSON-stringify on POST
      body: isAttending ? undefined : JSON.stringify({ sessionId }),
    });

    if (!res.ok) {
      console.error(await res.json());
      setIsJoining(false);
      return;
    }

    // Update our attendee list locally
    if (isAttending) {
      setAttendees((prev) => prev.filter((u) => u.id !== ownerId));
    } else {
      setAttendees((prev) => [
        ...prev,
        { id: ownerId, name: undefined, email: '' },
      ]);
    }

    // Refresh the page data
    router.refresh();
    setIsJoining(false);
  };

  return (
    <div className="text-center mt-6">
      <button
        className={`btn ${
          attendees.some((u) => u.id === ownerId) ? 'btn-danger' : 'btn-primary'
        }`}
        onClick={joinOrLeave}
        disabled={isJoining}
      >
        {attendees.some((u) => u.id === ownerId)
          ? 'Leave Session'
          : 'Join Session'}
      </button>
    </div>
  );
}
