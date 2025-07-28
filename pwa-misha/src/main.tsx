import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'

registerSW()

const rootElement = document.getElementById('root')!;
rootElement.style.padding = '0'; // overrides the global padding

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
