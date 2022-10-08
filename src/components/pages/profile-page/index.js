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
  Link,
} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import StyledInput from '../../common-components/input-styled'
import PersonIcon from '@mui/icons-material/Person'
import AvatarBlock from './avatar-block'
import Achievements from './achievements'
import Collections from './collections'
import Articls from './articls'
import {ReactComponent as LinesSvg} from '../../../assets/figures/3lines.svg'
import Coins from './coins'

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

const ProfilePage = () => {
  return (
    <>
      <Grid container spacing={8} justifyContent="space-between">
        <Grid item xs={8} sx={{overflow: 'hidden'}}>
          <Grid container spacing={5}>
            <Grid item>
              <AvatarBlock />
            </Grid>
            <Grid item>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: '45px',
                  lineHeight: '67px',
                  textTransform: 'uppercase',
                  color: '#27196C',
                }}
              >
                Иванов Иван
              </Typography>
              <Link
                href="mailto:#"
                sx={{
                  display: 'block',
                  mt: 8,
                  fontWeight: 400,
                  fontSize: '25px',
                  lineHeight: '37px',
                  textTransform: 'uppercase',
                  color: '#03A3DF',
                }}
              >
                ivanivanov@ru
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <Coins />
        </Grid>

        <Grid item xs={12}>
          <Achievements />
        </Grid>
        <Grid item xs={12}>
          <Articls />
        </Grid>
        <Grid item xs={12}>
          <Collections />
        </Grid>
      </Grid>
    </>
  )
}

export default ProfilePage
