import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Landing } from './pages/Landing'
import { NotFound } from './pages/NotFound'
import { Maintenance } from './pages/Maintenance'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Maintenance />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/preview" element={<Landing />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
