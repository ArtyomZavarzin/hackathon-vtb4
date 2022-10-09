import {CommonTemplate} from '../components/template/template'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import ProfilePage from '../components/pages/profile-page'
import ShopPage from '../components/pages/shop-page'
import AuthPage from '../components/pages/auth-page'
import TransactionsPage from '../components/pages/transactions-page'
import UsersPage from '../components/pages/users-page'
import NewNftPage from '../components/pages/create-nft-page'
import {ActivitiesPage} from '../components/pages/activities-page/ActivitiesPage'
import GroupPage from '../components/pages/group-page'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile/me" replace={true} />} />
      <Route path="/auth" element={<Navigate to="/profile/me" replace={true} />} />
      <Route path="*" element={<CommonTemplate />}>
        <Route path="profile/me" element={<ProfilePage isSelf={true} />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="new-nft" element={<NewNftPage />} />
        <Route path="transacions" element={<TransactionsPage />} />
        <Route path="transacions/:email" element={<TransactionsPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="groups" element={<GroupPage />} />

        <Route path="*" element={<div>no such page!</div>} />
      </Route>
    </Routes>
  )
}

export default AdminRoutes
