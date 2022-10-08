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
import {useNavigate, useParams} from 'react-router-dom'
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
import {useAuth} from '../../../hooks/use-auth'
import {getUserInfo} from '../../../store/actions/userAction'
import {useEffect} from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
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

const ProfilePage = ({isSelf = false}) => {
  const [isOwner, setIsOwner] = useState(false)
  const [id, setId] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id: paramsId} = useParams()

  const {userId, userRole} = useAuth()
  const {isLoadingUserInfo, userInfo} = useSelector(state => state.user)

  useEffect(() => {
    let currentId = isSelf ? userId : paramsId
    setId(currentId)
    dispatch(getUserInfo(currentId))
  }, [userId, paramsId, isSelf, dispatch])

  useEffect(() => {
    if (+userId === +userInfo.id) {
      setIsOwner(true)
    }
  }, [userInfo, userRole, userId])

  return (
    <>
      <Grid container spacing={8} justifyContent="space-between" alignItems="center">
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
                {userInfo.surname} {userInfo.name}
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
                {userInfo.email}
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          {isOwner ? (
            <Coins />
          ) : (
            <Button
              sx={{width: '100%', height: '215px', border: '5px solid #03A3DF', borderRadius: '16px'}}
              endIcon={<DoubleArrowIcon />}
              onClick={() => navigate('/transacions', {replace: true})}
            >
              <Typography fontWeight={600}>Перевести средства или NFT</Typography>
            </Button>
          )}
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
