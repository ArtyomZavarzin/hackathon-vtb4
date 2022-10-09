import {Box, Typography} from '@mui/material'

const NftElement = ({uri, tokenId, size = '150px', selected = false}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '8PX',
        backgroundColor: !selected ? 'inherit' : '#03A3DF',
        padding: '10px',
      }}
    >
      <Box
        sx={{
          width: size,
          height: size,
          borderRadius: '8px',
          backgroundColor: '#F5F5F5',
          backgroundImage: `url(${uri})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundOrigin: 'content-box',
          padding: '10px',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '67px',
          textTransform: 'uppercase',
          color: !selected ? '#27196C' : 'white',
        }}
      >
        token #{tokenId}
      </Typography>
    </Box>
  )
}

export default NftElement
