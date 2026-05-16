import { Suspense } from 'react';
import AdvisorsClient from './AdvisorsClient';

export default function AdvisorsPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-brand-bg flex items-center justify-center" dir="rtl">
        <div className="text-brand-gold text-xl">טוען...</div>
      </div>
    }>
      <AdvisorsClient />
    </Suspense>
  );
}
