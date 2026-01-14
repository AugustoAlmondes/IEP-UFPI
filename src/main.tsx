import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Institutional from './pages/Institutional'
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Equipe from './pages/Equipe'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import FormNewsletter from './pages/FormNewsletter'
import Settings from './pages/Settings'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      theme='dark'
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      draggable
    />

    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/form-newsletter" element={<FormNewsletter />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
)