import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <Router>
        <ToastProvider />
        <App />
      </Router>
    </HeroUIProvider>
  </React.StrictMode>,
)
