'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SessionConfirmationPage() {
  const { code, sessionId } = useParams();
  const router = useRouter();

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase
        .from('StudySession')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (error) {
        setError(error.message);
      } else {
        setSession(data);
      }

      setLoading(false);
    };

    fetchSession();
  }, [sessionId]);

  const handleDelete = async () => {
    const confirm = window.confirm('Are you sure you want to delete this session?');
    if (!confirm) return;

    const { error } = await supabase
      .from('StudySession')
      .delete()
      .eq('id', sessionId);

    if (error) {
      alert('Failed to delete session: ' + error.message);
    } else {
      router.push(`/courses/${code}`);
    }
  };

  const handleEdit = () => {
    router.push(`/courses/${code}/sessions/${sessionId}/edit`);
  };

  if (loading) return <div className="text-white p-4">Loading session details...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-xl p-6 bg-zinc-900 rounded shadow border border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4">Session Created!</h1>
        <p><strong>Session ID:</strong> {session.id}</p>
        <p><strong>Topic:</strong> {session.topic}</p>
        <p><strong>Description:</strong> {session.description}</p>
        <p><strong>Start:</strong> {new Date(session.startTime).toLocaleString()}</p>
        <p><strong>End:</strong> {new Date(session.endTime).toLocaleString()}</p>
        <p><strong>Course:</strong> {code}</p>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Placeholder for real-time chat */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Live Chat</h2>
          <p className="text-gray-400">Chat feature coming soon...</p>
        </div>
      </div>
    </div>
  );
}
