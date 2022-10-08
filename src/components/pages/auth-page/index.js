import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
  Paper,
  Box,
  Link as MuiLink,
  ButtonBase,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FilledInput,
} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import StyledInput from '../../common-components/input-styled'
import PersonIcon from '@mui/icons-material/Person'
import {login, register} from '../../../store/actions/authAction'

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   buttonSpacing: {
//     marginLeft: theme.spacing(1),
//   },
// }))

const sections = {
  register: 'register',
  login: 'login',
}

const AuthPage = () => {
  // const classes = useStyles()

  const [currentSection, setCurrentSection] = useState(sections.login)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const [fio, setFio] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const {isLoading, error} = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async () => {
    const form = {
      name: fio.split(' ')[0],
      surname: fio.split(' ')[1],
      middleName: fio.split(' ')[2],
      email: email,
      password: password,
    }
    if (password == repeatPassword) {
      const ok = await dispatch(register(form))
      if (ok) {
        setCurrentSection(sections.login)
      }
    }
  }

  const handleLogin = async () => {
    const loginData = {email: email, password: password}
    const ok = await dispatch(login(loginData))
    if (ok) {
      navigate('/')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        background:
          'radial-gradient(125.05% 114.12% at 15.58% 11.18%, #0A0822 0%, #1B1351 10.77%, #4E2BC3 42.71%, #03A3DF 64.52%, #FBEFFB 100%)',
      }}
    >
      <Grid container sx={{minHeight: 'inherit'}}>
        <Grid item xs={12} md={6}>
          <Box sx={{p: 2}}>
            <Box>
              <Typography sx={{color: 'white', fontSize: '17vh', lineHeight: '0.75', fontWeight: 600}}>
                Stuff
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '17vh',
                  lineHeight: '0.75',
                  writingMode: 'vertical-lr',
                  transform: 'rotate(180deg)',
                  fontWeight: 600,
                }}
              >
                VTB
              </Typography>
            </Box>
          </Box>
          <Box sx={{mt: 5}}>
            <ButtonBase
              variant="contained"
              onClick={() => setCurrentSection(sections.register)}
              sx={
                currentSection === sections.register
                  ? {
                      width: '80%',
                      background: '#FFFFFF',
                      padding: '5px',
                      paddingLeft: '0',
                      color: 'black',
                      borderRadius: '0 20px 100px 0',
                      textTransform: 'none',
                      '&:hover': {
                        background: '#FFFFFF',
                      },
                    }
                  : {
                      width: '80%',
                      background: 'transparent',
                      boxSizing: 'border-box',
                      border: '5px solid #FFFFFF',
                      borderLeft: 'none',
                      color: 'white',
                      borderRadius: '0 20px 100px 0',
                      textTransform: 'none',
                    }
              }
            >
              <Typography sx={{fontSize: '60px', lineHeight: '1', margin: '10px auto 10px 50px'}}>
                Регистрация
              </Typography>
            </ButtonBase>
            <ButtonBase
              variant="contained"
              onClick={() => setCurrentSection(sections.login)}
              sx={
                currentSection === sections.login
                  ? {
                      mt: 3,
                      width: '60%',
                      background: '#FFFFFF',
                      color: 'black',
                      borderRadius: '0 20px 100px 0',
                      padding: '5px',
                      paddingLeft: '0',
                      textTransform: 'none',
                      '&:hover': {
                        background: '#FFFFFF',
                      },
                    }
                  : {
                      mt: 3,
                      width: '60%',
                      background: 'transparent',
                      boxSizing: 'border-box',
                      border: '5px solid #FFFFFF',
                      borderLeft: 'none',
                      color: 'white',
                      borderRadius: '0 20px 100px 0',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'transparent',
                      },
                    }
              }
            >
              <Typography sx={{fontSize: '60px', lineHeight: '1', margin: '10px auto 10px 50px'}}>Вход</Typography>
            </ButtonBase>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} alignSelf="center">
          <Box sx={{p: '70px', pl: '30px', pr: '100px'}}>
            <Typography color="white" variant="h3" sx={{m: '8px', mb: '30px', fontWeight: 600}}>
              {currentSection === sections.login ? 'Введите данные' : 'Ваши данные'}
            </Typography>

            {currentSection === sections.login ? (
              <>
                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-email">Корпоративная почта</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-email"
                    type={'text'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={isLoading}
                    label="email"
                  />
                </FormControl>

                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-adornment-password"
                    type={isShowPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={isLoading}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setIsShowPassword(!isShowPassword)}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </>
            ) : (
              <>
                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-fio">Ф.И.О</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-fio"
                    type={'text'}
                    value={fio}
                    onChange={e => setFio(e.target.value)}
                    disabled={isLoading}
                    label="fio"
                  />
                </FormControl>

                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-email">Корпоративная почта</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-email"
                    type={'text'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={isLoading}
                    label="email"
                  />
                </FormControl>

                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">Придумайте пароль</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-adornment-password"
                    type={isShowPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={isLoading}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setIsShowPassword(!isShowPassword)}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <FormControl sx={{m: 1}} fullWidth variant="filled">
                  <InputLabel htmlFor="outlined-adornment-password">Повторите пароль</InputLabel>
                  <StyledInput
                    variant="filled"
                    id="outlined-adornment-password"
                    type={isShowPassword ? 'text' : 'password'}
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    disabled={isLoading}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setIsShowPassword(!isShowPassword)}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="repeat password"
                  />
                </FormControl>
              </>
            )}

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <ButtonBase
                variant="contained"
                sx={{mt: 5, background: 'white', borderRadius: '50px', padding: '10px 40px', width: '250px'}}
                onClick={currentSection === sections.login ? () => handleLogin() : () => handleRegister()}
                disabled={isLoading}
              >
                <Typography sx={{fontSize: '30px'}}>
                  {currentSection === sections.login ? 'Войти' : 'Продолжить'}
                </Typography>
              </ButtonBase>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AuthPage
