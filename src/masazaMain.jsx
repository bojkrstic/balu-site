import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ServiceLandingPage from './ServiceLandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServiceLandingPage pageKey="masaza-beba-pirot" />
  </StrictMode>,
)
