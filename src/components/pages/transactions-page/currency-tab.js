import styled from '@emotion/styled'
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import StyledInput from '../../common-components/input-styled'
import {useState} from 'react'
import {userRoles} from '../../../common/constants'

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

const CurrencyTab = ({userRole, amuont, setAmuont, sendMatic, onSendRuble}) => {
  const [currency, setCurrency] = useState('digital rubles')
  const [isRegulary, setIsRegulary] = useState(false)

  return (
    <>
      <FormControl sx={{m: 1}} fullWidth variant="filled">
        <InputLabel htmlFor="outlined-adornment-amuont">Сумма перевода</InputLabel>
        <StyledInput
          variant="filled"
          id="outlined-amuont"
          type={'text'}
          value={amuont}
          onChange={e => setAmuont(e.target.value)}
          label="amuont"
        />
      </FormControl>
      <FormControl sx={{m: 1}} fullWidth onChange={e => setCurrency(e.target.value)}>
        <FormLabel id="demo-row-radio-buttons-group-label">Актив:</FormLabel>
        <RadioGroup
          value={currency}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="digital rubles" control={<Radio />} label="digital rubles" />
          <FormControlLabel value="matic" control={<Radio />} label="matic" />
        </RadioGroup>
      </FormControl>
      {userRole === userRoles.leader ||
        (userRole === userRoles.admin && (
          <FormControlLabel
            sx={{ml: '-4px'}}
            checked={isRegulary}
            onChange={() => {
              setIsRegulary(!isRegulary)
            }}
            control={<Checkbox />}
            label="Регулярный платеж (раз в месяц)"
          />
        ))}

      <Box sx={{display: 'flex', justifyContent: 'center'}} onClick={currency === 'matic' ? sendMatic : onSendRuble}>
        <StyledButton sx={{mt: 2}}>Перевести</StyledButton>
      </Box>
    </>
  )
}

export default CurrencyTab
