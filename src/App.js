import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {GlobalStyles, ThemeProvider} from '@mui/material'
import theme from './theme'
import {useAuth} from './hooks/use-auth'
import {userRoles} from './common/constants'
import AuthPage from './components/pages/auth-page'

function App() {
  const [loadingApp, setLoadingApp] = useState(true)
  const dispatch = useDispatch()

  // const {userRole} = useAuth()

  // useEffect(() => {
  //   const fething = async () => {
  //     setLoadingApp(true)
  //     const refreshToken = localStorage.getItem('refreshToken')
  //     if (refreshToken) {
  //       await dispatch(refresh(refreshToken))
  //     }
  //     setLoadingApp(false)
  //   }
  //   fething()
  // }, [dispatch])

  // if (loadingApp) {
  //   return <div></div>
  // }

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {backgroundColor: '#fbfbfd', fontFamily: 'Raleway, Roboto, Helvetica, Arial, sans-serif'},
        }}
      />
      <Router>
        <ThemeProvider theme={theme}>
          <div className="App">
            <AuthPage />
            {/* {userRole === userRoles.student && <StudentRoutes />}
            {userRole === userRoles.admin && <AdminRoutes />}
            {userRole === userRoles.company && <CompanyRoutes />}
            {[null, undefined].includes(userRole) && <GuestRoutes />} */}
          </div>
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
