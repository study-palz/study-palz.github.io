import { Suspense } from 'react';
import ResetPasswordClient from './resetPasswordClient';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <ResetPasswordClient />
    </Suspense>
  );
}
