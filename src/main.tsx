import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ResetCss from './RecetCss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetCss />
    <App />
  </StrictMode>
);