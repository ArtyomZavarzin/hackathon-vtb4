import styled from '@emotion/styled'
import {ExpandMoreOutlined} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControl,
  Input,
  InputLabel,
  Paper,
  TableContainer,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import {useCallback} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {userRoles} from '../../../common/constants'
import {useAuth} from '../../../hooks/use-auth'
import {createNft} from '../../../store/actions/cryptoAction'
import {createGroup, getAllGroups} from '../../../store/actions/groupAction'
import {getAllUsers} from '../../../store/actions/userAction'
import StyledInput from '../../common-components/input-styled'
import ModalTransition from '../../common-components/modal-transition-up'

const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor: '#03A3DF',
  color: 'white',
  fontWeight: 600,
  marginBottom: '30px',
  padding: '6px 24px',
  borderRadius: '20px',
  '&:hover, &.active': {
    backgroundColor: '#03A3DF',
    color: 'white',
  },
}))

const GroupPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {userRole, userId} = useAuth()

  const {allGroups} = useSelector(state => state.group)

  const onCreate = async () => {
    const form = {
      name: name,
      description: desc,
      leaderId: +userId,
      workersIds: [+userId],
    }
    const {ok} = await dispatch(createGroup(form))
    if (ok) {
      setName('')
      setDesc('')
      setIsOpen('')
      dispatch(getAllGroups())
    }
  }

  useEffect(() => {
    dispatch(getAllGroups())
  }, [])

  return (
    <>
      {[userRoles.admin, userRoles.leader].includes(userRole) && (
        <StyledButton onClick={() => setIsOpen(true)}>Добавить группу</StyledButton>
      )}

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '67px',
              textTransform: 'uppercase',
              color: '#27196C',
            }}
          >
            Команда 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Имя</TableCell>
                  <TableCell align="right">Почта</TableCell>
                  <TableCell align="right">Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[{name: 'dsda', id: 2}]
                  ?.filter(el => el.role !== userRoles.admin)
                  .map(row => (
                    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                      <TableCell component="th" scope="row">
                        {row.name} {row.surname}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => navigate(`/profile/${row.id}`)}>Профиль</Button>
                        <Button onClick={() => navigate(`/transacions/${row.email}`)}>Перевод</Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <ModalTransition isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="md" title="Созадние группы">
        <>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="outlined-adornment-amuont">Название</InputLabel>
            <StyledInput
              variant="filled"
              id="outlined-amuont"
              type={'text'}
              value={name}
              onChange={e => setName(e.target.value)}
              label="amuont"
            />
          </FormControl>
          <FormControl sx={{m: 1}} fullWidth variant="filled">
            <InputLabel htmlFor="outlined-adornment-amuont">Описание</InputLabel>
            <StyledInput
              variant="filled"
              id="outlined-amuont"
              type={'text'}
              value={desc}
              onChange={e => setDesc(e.target.value)}
              label="amuont"
            />
          </FormControl>
          <StyledButton onClick={() => onCreate()}>Добавить группу</StyledButton>
        </>
      </ModalTransition>
    </>
  )
}

export default GroupPage
