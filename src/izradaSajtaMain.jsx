import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthorPage from './AuthorPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthorPage />
  </StrictMode>,
)
