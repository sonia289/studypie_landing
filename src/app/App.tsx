import { lazy, Suspense } from 'react';

const Frame = lazy(() => import('../imports/Frame2087325452-73-5916'));

export default function App() {
  return (
    <Suspense fallback={<div style={{ width: '100%', height: '100vh', background: '#000' }} />}>
      <Frame />
    </Suspense>
  );
}
