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
import StyledInput from '../../common-components/input-styled'
import {useState} from 'react'
import {Box} from '@mui/system'

const mock = [
  {
    name: '1 nft',
  },
  {
    name: '31 nft',
  },
  {
    name: '2 nft',
  },
  {
    name: '41 nft',
  },
]

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

const style1 = {display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}
const style2 = {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  border: '3px solid #03A3DF',
  borderRadius: '8PX',
}

const NftTab = ({}) => {
  const [currentNft, setCurrentNft] = useState(null)

  return (
    <>
      <Grid container spacing={4} sx={{mt: 2}}>
        {mock.map((el, index) => {
          return (
            <Grid key={index} item xs={4} onClick={() => setCurrentNft(index)}>
              <Box sx={currentNft === index ? style2 : style1}>
                <Box
                  sx={{width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#F5F5F5', mt: 1}}
                ></Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '47px',
                    textTransform: 'uppercase',
                    color: '#27196C',
                  }}
                >
                  {el.name}
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>

      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <StyledButton sx={{mt: 2}}>Перевести</StyledButton>
      </Box>
    </>
  )
}

export default NftTab
