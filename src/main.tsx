import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PortfolioV2 } from './components/v2/PortfolioV2';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import './index.css';

// Force browser tab title when on V1
const TAB_TITLE = 'YASIR DEVELOPER PORTFOLIO';
if (typeof document !== 'undefined') {
  const updateTitle = () => {
    if (!window.location.pathname.startsWith('/v2') && !window.location.hash.startsWith('#/v2')) {
      document.title = TAB_TITLE;
    }
  };
  window.addEventListener('focus', updateTitle);
  window.addEventListener('blur', updateTitle);
  document.addEventListener('visibilitychange', updateTitle);
}

const RootRouter: React.FC = () => {
  const [isV2, setIsV2] = useState(() => {
    return window.location.pathname.startsWith('/v2') || window.location.hash.startsWith('#/v2');
  });

  useEffect(() => {
    const handlePopState = () => {
      setIsV2(window.location.pathname.startsWith('/v2') || window.location.hash.startsWith('#/v2'));
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  if (isV2) {
    return <PortfolioV2 />;
  }

  return (
    <>
      <App />
      <div className="fixed bottom-5 right-5 z-50 pointer-events-auto">
        <a
          href="/v2"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/80 hover:bg-black text-white/90 hover:text-white border border-orange-500/30 backdrop-blur-xl shadow-2xl text-xs font-mono transition-all hover:scale-105 active:scale-95 group"
          title="Preview new Bento Grid design"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:animate-ping" />
          <span>⚡ Preview V2 Bento</span>
        </a>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary name="RootLevel">
      <RootRouter />
    </ErrorBoundary>
  </React.StrictMode>
);
