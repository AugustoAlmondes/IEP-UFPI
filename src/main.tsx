import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Institutional from './pages/Institutional'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Equipe from './pages/Equipe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/equipe" element={<Equipe />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
