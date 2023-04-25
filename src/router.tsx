import { Route } from 'react-router'
import { Routes } from 'react-router-dom'

import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'

export function AppRouter() {
  return (
    <Routes>
      <Route Component={Landing} path="/pynorte2023-site" />
      <Route Component={NotFound} path="*" />
    </Routes>
  )
}
