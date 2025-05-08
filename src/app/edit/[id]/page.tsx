import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';

export default async function EditStuffPage({ params }: { params: { id: string | string[] } }) {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  if (!id) {
    return notFound();
  }

  return (
    <main>
      <h1>Edit Item</h1>
      <p>
        Editing item with ID:
        {id}
      </p>
    </main>
  );
}
