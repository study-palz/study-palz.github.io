'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function CreateSessionPage({ params }: { params: { code: string } }) {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchAccessToken() {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        console.error('❌ Error fetching session:', error);
        setAccessToken(null);
      } else {
        console.log('✅ Session loaded:', data.session);
        setAccessToken(data.session.access_token);
      }
      setLoading(false);
    }
    fetchAccessToken();
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!accessToken) {
      alert('User not logged in.');
      return;
    }

    console.log('📤 Sending session with token:', accessToken);

    const res = await fetch(`/api/courses/${params.code}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ topic, description, startTime, endTime }),
    });

    if (res.ok) {
      const session = await res.json();
      console.log('✅ Session created:', session);
      router.push(`/courses/${params.code}/sessions/${session.id}/confirmation`);
    } else {
      const err = await res.json();
      console.error('❌ Failed to create session:', err.error);
      alert('Failed to create session: ' + err.error);
    }
  };

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-white text-center mb-4">Create Study Session</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-dark p-4 rounded shadow mx-auto"
        style={{ maxWidth: '600px' }}
      >
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
