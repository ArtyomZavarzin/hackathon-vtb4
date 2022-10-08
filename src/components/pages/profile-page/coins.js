import {Divider, Typography, Box, Grid} from '@mui/material'
import {useState} from 'react'
import TitleBlock from './title-block'

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

const Coins = () => {
  const [currentPage, setCurentPage] = useState(1)
  return (
    <>
      <Grid container sx={{borderRadius: '8px', overflow: 'hidden'}}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              background: '#3E4B7D',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '60px',
                lineHeight: '67px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              50
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '67px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              digital rubles
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: '100%',
              height: '200px',
              background: '#03A3DF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '60px',
                lineHeight: '67px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              3
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '30px',
                lineHeight: '67px',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#FFFFFF',
              }}
            >
              matics
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Coins
