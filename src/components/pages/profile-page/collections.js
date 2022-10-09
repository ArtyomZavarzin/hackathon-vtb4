import {Divider, Typography, Box, Grid, Button, Link} from '@mui/material'
import {useMemo} from 'react'
import {useState} from 'react'
import ModalTransition from '../../common-components/modal-transition-up'
import NftElement from '../../common-components/nft-element'
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

const Collections = ({collections}) => {
  const [isOpen, setIsOpen] = useState(false)

  // const nftToShow = collections.map(el => {
  //   return [...el.tokens.map(token => ({tokenId: token, uri: el.uri}))]
  // })
  const nftToShow = useMemo(() => {
    const list = []
    collections.forEach(element => {
      list.push(...element.tokens.map(token => ({tokenId: token, uri: element.uri})))
    })
    return list
  }, [collections])

  return (
    <>
      <TitleBlock title="NFT - коллекция" subtitle={`Количество картин - ${nftToShow.length}`} />
      {nftToShow?.length > 0 ? (
        <>
          <Grid container spacing={4}>
            {nftToShow.slice(0, 3).map(el => {
              return (
                <Grid item xs={4}>
                  <NftElement uri={el.uri} tokenId={el.tokenId} />
                </Grid>
              )
            })}
          </Grid>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Link
              component={Button}
              sx={{mb: 2, mt: 2}}
              underline="none"
              color="#03A3DF"
              onClick={() => setIsOpen(true)}
            >
              Посмотреть все
            </Link>
          </Box>
        </>
      ) : (
        <Typography
          sx={{
            mt: '-40px',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '47px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#27196C',
          }}
        >
          Тут пока пусто
        </Typography>
      )}

      <Divider sx={{mb: 5}} />

      <ModalTransition isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="sm" title="Вся коллекция">
        <>
          <Grid container spacing={4}>
            {nftToShow.map(el => {
              return (
                <Grid item xs={4}>
                  <NftElement uri={el.uri} tokenId={el.tokenId} />
                </Grid>
              )
            })}
          </Grid>
        </>
      </ModalTransition>
    </>
  )
}

export default Collections
