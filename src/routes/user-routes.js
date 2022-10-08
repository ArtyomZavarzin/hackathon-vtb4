import {CommonTemplate} from '../components/template/template'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import ProfilePage from '../components/pages/profile-page'
import ShopPage from '../components/pages/shop-page'
import AuthPage from '../components/pages/auth-page'
import TransactionsPage from '../components/pages/transactions-page'

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" replace={true} />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="*" element={<CommonTemplate />}>
        <Route path="profile" element={<ProfilePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="transacions" element={<TransactionsPage />} />
        {/* <Route path="companies/:id" element={<CompanyPage />} />
        <Route path="student/:id" element={<StudentPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="application" element={<StudentApplicationPage />} /> */}
        <Route path="*" element={<div>no such page!</div>} />
      </Route>
    </Routes>
  )
}

export default UserRoutes
