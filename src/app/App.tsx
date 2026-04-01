import { lazy, Suspense, Component } from 'react';
import type { ReactNode } from 'react';

const Frame = lazy(() => import('../imports/Frame2087325452-73-5916'));

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: 'red', background: '#fff' }}>
          <h2>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 14 }}>
            {this.state.error.message}
            {'\n\n'}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={{ width: '100%', height: '100vh', background: '#000' }} />}>
        <Frame />
      </Suspense>
    </ErrorBoundary>
  );
}
