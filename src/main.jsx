import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/assets/styles/reset.scss';
import '@/assets/styles/variables.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
