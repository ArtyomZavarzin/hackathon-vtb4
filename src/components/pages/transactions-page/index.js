import styled from '@emotion/styled'
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import {useState} from 'react'
import StyledInput from '../../common-components/input-styled'
import Coins from '../profile-page/coins'
import CurrencyTab from './currency-tab'
import NftTab from './nft-tab'

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

const TransactionsPage = () => {
  const [recipient, setRecipient] = useState('')

  const [tab, setTab] = useState('currency')

  const activeStyle = {
    width: '150px',
    background: '#03A3DF',
    color: 'white',
    '&:hover': {background: '#03A3DF', color: 'white'},
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={4}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: '35px',
            lineHeight: '35px',
            textTransform: 'uppercase',
            color: '#27196C',
            mb: 3,
          }}
        >
          Ваши средства
        </Typography>
        <Coins />
      </Grid>
      <Grid item xs={8}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: '35px',
            lineHeight: '35px',
            textTransform: 'uppercase',
            color: '#27196C',
            mb: 3,
          }}
        >
          Получатель
        </Typography>
        <FormControl sx={{m: 1}} fullWidth variant="filled">
          <InputLabel htmlFor="outlined-adornment-email">Корпоративная почта получателя</InputLabel>
          <StyledInput
            variant="filled"
            id="outlined-email"
            type={'text'}
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
            label="email"
          />
        </FormControl>

        <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{mt: 2}}>
          <Button sx={tab !== 'currency' ? {width: '150px'} : activeStyle} onClick={() => setTab('currency')}>
            Средства
          </Button>
          <Button sx={tab !== 'nft' ? {width: '150px'} : activeStyle} onClick={() => setTab('nft')}>
            NFT
          </Button>
        </ButtonGroup>

        {tab === 'currency' ? <CurrencyTab /> : <NftTab />}
      </Grid>
    </Grid>
  )
}

export default TransactionsPage
