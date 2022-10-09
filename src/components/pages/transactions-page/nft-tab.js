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
import {useMemo, useState} from 'react'
import {Box} from '@mui/system'
import NftElement from '../../common-components/nft-element'

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

const NftTab = ({collections, onSendNft, setCurrentNft, currentNft}) => {
  const nftToShow = useMemo(() => {
    const list = []
    collections.forEach(element => {
      list.push(...element.tokens.map(token => ({tokenId: token, uri: element.uri})))
    })
    return list
  }, [collections])

  return (
    <>
      <Grid container spacing={4} sx={{mt: 2}}>
        {nftToShow.map(el => {
          return (
            <Grid item xs={4} onClick={() => setCurrentNft(el.tokenId)}>
              <NftElement uri={el.uri} tokenId={el.tokenId} selected={currentNft === el.tokenId} />
            </Grid>
          )
        })}
      </Grid>

      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <StyledButton
          sx={{mt: 2}}
          onClick={() => {
            onSendNft(currentNft)
          }}
        >
          Перевести
        </StyledButton>
      </Box>
    </>
  )
}

export default NftTab
