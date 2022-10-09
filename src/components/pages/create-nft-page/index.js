import styled from '@emotion/styled'
import {Box, Button, FormControl, Input, InputLabel} from '@mui/material'
import {useCallback} from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useAuth} from '../../../hooks/use-auth'
import {createNft} from '../../../store/actions/cryptoAction'
import {getAllUsers} from '../../../store/actions/userAction'
import StyledInput from '../../common-components/input-styled'

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

const NewNftPage = () => {
  const [path, setPath] = useState('')
  const [count, setCount] = useState('')

  const {userPublicKey} = useAuth()

  const dispatch = useDispatch()

  const handleBlur = () => {
    if (count < 0) {
      setCount(0)
    } else if (count > 100) {
      setCount(100)
    }
  }

  const onCreateNft = useCallback(async () => {
    const form = {
      toPublicKey: userPublicKey,
      uri: path,
      nftCount: +count,
    }
    const {ok} = await dispatch(createNft(form))
    if (ok) {
      setPath('')
      setCount('')
    }
  }, [userPublicKey, path, count, dispatch])

  return (
    <>
      <FormControl sx={{m: 1}} fullWidth variant="filled">
        <InputLabel htmlFor="outlined-adornment-email">Ссылка на изображение</InputLabel>
        <StyledInput
          variant="filled"
          id="outlined-email"
          type={'text'}
          value={path}
          onChange={e => setPath(e.target.value)}
          label="email"
        />
      </FormControl>
      <FormControl sx={{m: 1}} fullWidth variant="filled">
        <InputLabel htmlFor="outlined-adornment-email">Количество токенов в коллекции</InputLabel>
        <StyledInput
          variant="filled"
          id="outlined-emai212"
          value={count}
          onBlur={handleBlur}
          onChange={event => setCount(event.target.value === '' ? '' : Number(event.target.value))}
          label="emaidsl"
          inputProps={{
            step: 5,
            min: 0,
            max: 100,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
      </FormControl>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <StyledButton sx={{mt: 2}} onClick={onCreateNft}>
          Создать
        </StyledButton>
      </Box>
    </>
  )
}

export default NewNftPage
