'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function EditSessionForm({
  code,
  sessionId,
  topic: initialTopic,
  description: initialDescription,
  startTime: initialStart,
  endTime: initialEnd,
}: {
  code: string;
  sessionId: number;
  topic: string;
  description: string;
  startTime: string;
  endTime: string;
}) {
  const router = useRouter();
  const [topic, setTopic] = useState(initialTopic);
  const [description, setDescription] = useState(initialDescription);
  const [startTime, setStartTime] = useState(initialStart);
  const [endTime, setEndTime] = useState(initialEnd);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const res = await fetch(`/api/courses/${code}/sessions/${sessionId}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ topic, description, startTime, endTime }),
    });

    if (res.ok) {
      router.push(`/courses/${code}/sessions/${sessionId}/confirmation`);
    } else {
      alert('Failed to update session');
    }

    setSaving(false);
  };

  return (
    <div className="container py-5 text-white">
      <h1 className="text-center mb-4">Edit Study Session</h1>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Topic</label>
          <input
            type="text"
            className="form-control bg-dark text-white border-secondary"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control bg-dark text-white border-secondary"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Start Time</label>
          <input
            type="datetime-local"
            className="form-control bg-dark text-white border-secondary"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">End Time</label>
          <input
            type="datetime-local"
            className="form-control bg-dark text-white border-secondary"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success px-4 py-2" disabled={saving}>
            {saving ? 'Saving...' : 'Update Session'}
          </button>
        </div>
      </form>
    </div>
  );
}
