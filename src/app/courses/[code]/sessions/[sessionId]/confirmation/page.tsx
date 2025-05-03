import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function SessionConfirmationPage({
  params,
}: {
  params: { code: string; sessionId: string };
}) {
  const { data: session, error } = await supabase
    .from('StudySession')
    .select('*')
    .eq('uuid', params.sessionId)
    .single();

  if (error || !session) {
    return <div className="text-red-500 p-6">Session not found.</div>;
  }

  return (
    <div className="container py-5">
      <h1 className="text-white text-3xl mb-4 text-center">Study Session Created!</h1>
      <div className="bg-dark text-white p-4 rounded shadow mx-auto" style={{ maxWidth: '600px' }}>
        <p><strong>Topic:</strong> {session.topic}</p>
        <p><strong>Description:</strong> {session.description}</p>
        <p><strong>Start Time:</strong> {new Date(session.startTime).toLocaleString()}</p>
        <p><strong>End Time:</strong> {new Date(session.endTime).toLocaleString()}</p>
        <p><strong>Session ID:</strong> {session.uuid}</p>
      </div>
    </div>
  );
}
