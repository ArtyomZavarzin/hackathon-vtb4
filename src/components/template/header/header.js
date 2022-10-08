import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {Link, NavLink, useNavigate, useParams} from 'react-router-dom'
import {Grid, Container, Button, Typography, Badge} from '@mui/material'
// import {useDispatch, useSelector} from 'react-redux'
// import {logout} from '../../../store/actions/authAction'
// import {useAuth} from '../../../hooks/use-auth'
// import HitsLogo from '../../../assets/img/Hits-logo.png'
// import {approvalStates, userRoles} from '../../../common/constants'
import {styled} from '@mui/material/styles'
import PersonIcon from '@mui/icons-material/Person'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import {useState} from 'react'
import {useEffect} from 'react'
import HeaderPageBlock from './header-page-block'
import ShopBlock from './shop-block'
import ModalTransition from '../../common-components/modal-transition-up'
import Basket from './basket'
import {logout} from '../../../store/actions/authAction'
import {useDispatch} from 'react-redux'

const StyledLogo = styled(Box)(({theme}) => ({
  cursor: 'default',
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginLeft: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'black',
    transition: 'all .3s',
  },
  '&:hover span': {
    textShadow: '0 0 18px rgba(0, 0, 0, 0.35)',
  },
}))

const StyledButton = styled(Button)(({theme}) => ({
  color: 'white',
  marginTop: '30px',
  marginBottom: '30px',
  padding: '6px 12px',
  borderRadius: '20px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s',
  textTransform: 'lowercase',
  fontSize: '18px',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '19px',
    width: '0px',
    bottom: '0px',
    height: '2px',
    backgroundColor: 'white',
    transition: 'all 0.3s',
  },
  '&:hover': {
    // transform: 'translateY(-3px)',
    // transform: 'scale(1.025)',
  },
  '&:hover, &.active': {
    backgroundColor: 'inherit',
    '&::after': {
      width: 'calc(100% - 36px)',
    },
  },
  // '&.active': {
  //   color: 'white',
  //   backgroundColor: 'black',
  // },
}))
const StyledButtonBasket = styled(Button)(({theme}) => ({
  backgroundColor: 'white',
  color: 'black',
  fontWeight: 600,
  marginTop: '30px',
  marginBottom: '30px',
  padding: '6px 24px',
  borderRadius: '20px',
  '&:hover, &.active': {
    backgroundColor: 'white',
    color: 'black',
  },
}))

const StyledBadge = styled(Badge)(({theme}) => ({
  '& .MuiBadge-badge': {
    right: 4,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: 'black',
  },
}))

const Header = () => {
  const [isOpenBasket, setIsOpenBasket] = useState(false)
  const [page, setPage] = useState('')
  let params = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    setPage(params['*'].split('/')[0])
  }, [params])

  const pageBlocks = {
    profile: (
      <HeaderPageBlock
        title={
          <>
            Профиль
            <br />
            сотрудника
          </>
        }
      />
    ),
    shop: <ShopBlock />,
    transacions: (
      <HeaderPageBlock
        title={
          <>
            Перевод
            <br /> средств
          </>
        }
      />
    ),
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <AppBar
        sx={{
          position: 'static',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          background:
            'radial-gradient(125.05% 114.12% at 15.58% 11.18%, #0A0822 0%, #1B1351 10.77%, #4E2BC3 42.71%, #03A3DF 64.52%, #FBEFFB 100%)',
          backgroundSize: '130%',
        }}
      >
        <Container maxWidth>
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, alignSelf: 'start'}}>
              <Box>
                <StyledButton component={NavLink} to={'/profile/me'}>
                  Профиль
                </StyledButton>

                <StyledButton component={NavLink} to={'/blog'}>
                  Блог
                </StyledButton>

                <StyledButton component={NavLink} to={'/shop'}>
                  Магазин
                </StyledButton>

                <StyledButton component={NavLink} to={'/activities'}>
                  Активности
                </StyledButton>

                <StyledButton component={NavLink} to={'/transacions'}>
                  Переводы
                </StyledButton>

                <StyledButton endIcon={<LogoutOutlinedIcon />} onClick={handleLogout}>
                  Выход
                </StyledButton>
              </Box>
              <Box>{pageBlocks[page]}</Box>
            </Box>

            {page !== 'shop' ? (
              <Box sx={{mt: '24px', mb: '24px'}}>
                <Box>
                  <Typography sx={{color: 'white', fontSize: '100px', lineHeight: '0.75', fontWeight: 600}}>
                    VTB
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '100px',
                      lineHeight: '0.75',
                      writingMode: 'vertical-lr',
                      fontWeight: 600,
                      ml: 'auto',
                    }}
                  >
                    Stuff
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box sx={{alignSelf: 'start'}}>
                <StyledButtonBasket variant="contained" onClick={() => setIsOpenBasket(true)}>
                  Корзина
                </StyledButtonBasket>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <ModalTransition isOpen={isOpenBasket} onClose={() => setIsOpenBasket(false)} maxWidth="md" title="Ваша корзина">
        <Basket />
      </ModalTransition>
    </>
  )
}
export default Header
