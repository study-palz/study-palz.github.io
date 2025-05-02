'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateSessionPage({ params }: { params: { code: string } }) {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await fetch(`/api/courses/${params.code}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, description, startTime, endTime }),
    });
  
    const result = await res.json();
  
    if (res.ok) {
      // 👇 redirect to confirmation page using returned session ID
      router.push(`/courses/${params.code}/sessions/${result.id}/confirmation`);
    } else {
      alert('Failed to create session: ' + result.error);
    }
  };
  

  return (
    <div className="container py-5">
      <h1 className="text-white text-center mb-4">Create Study Session</h1>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label text-white">Topic</label>
          <input
            type="text"
            className="form-control bg-dark text-white border border-secondary"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Description</label>
          <textarea
            className="form-control bg-dark text-white border border-secondary"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Start Time</label>
          <input
            type="datetime-local"
            className="form-control bg-dark text-white border border-secondary"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label text-white">End Time</label>
          <input
            type="datetime-local"
            className="form-control bg-dark text-white border border-secondary"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4 py-2">
            Create Session
          </button>
        </div>
      </form>
    </div>
  );
}
