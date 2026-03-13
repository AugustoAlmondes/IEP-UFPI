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
import { AdminRoute } from './routes/AdminRoute'
import Questions from './pages/Questions'
import Newsletter from './pages/Newsletter'
import { AuthProvider } from './providers/AuthProvider'
import InfoNewslatter from './pages/InfoNewslatter'
import ErrorPage from './pages/ErrorPage'
import Podcast from './pages/Podcast'

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

    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/institutional" element={<Institutional />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/info-newsletter/:index/:slug" element={<InfoNewslatter />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route
              path="/form-newsletter"
              element={
                <AdminRoute>
                  <FormNewsletter />
                </AdminRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <AdminRoute onlyAdmin={true}>
                  <Settings />
                </AdminRoute>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>,
)