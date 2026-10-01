import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './components/ui/ErrorBoundary';
import './index.css';

// Force browser tab title to remain strictly consistent
const TAB_TITLE = 'YASIR DEVELOPER PORTFOLIO';
if (typeof document !== 'undefined') {
  document.title = TAB_TITLE;
  window.addEventListener('focus', () => {
    document.title = TAB_TITLE;
  });
  window.addEventListener('blur', () => {
    document.title = TAB_TITLE;
  });
  document.addEventListener('visibilitychange', () => {
    document.title = TAB_TITLE;
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary name="RootLevel">
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
