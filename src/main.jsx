import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.jsx'
import { initSecurityProtection } from './utils/security.js'

// Activate inspection protection and anti-debugging shield
initSecurityProtection();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
      <Analytics/>
    </HelmetProvider>
  </StrictMode>,
)
