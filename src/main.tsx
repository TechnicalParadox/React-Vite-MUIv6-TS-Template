import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ColorModeProvider } from './ColorModeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider >
      <App />
    </ColorModeProvider >
  </StrictMode>,
)
