import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

// The root element where React will be mounted.
const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
