import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {userRoles} from '../../../common/constants'
import {getAllUsers} from '../../../store/actions/userAction'

const UsersPage = () => {
  const dispatch = useDispatch()
  const {allUsers} = useSelector(state => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  return (
    <>
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
            {allUsers
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
    </>
  )
}

export default UsersPage
