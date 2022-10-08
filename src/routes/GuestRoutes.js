import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import AuthPage from '../components/pages/auth-page/index.js'

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="Auth" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/auth" replace={true} />} />
    </Routes>
  )
}

export default GuestRoutes
