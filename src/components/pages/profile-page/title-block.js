import {Divider, Typography, Box, Grid} from '@mui/material'

const TitleBlock = ({title, subtitle}) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '25px',
          lineHeight: '30px',
          textTransform: 'uppercase',
          color: '#03A3DF',
        }}
      >
        {subtitle}
      </Typography>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '47px',
            textTransform: 'uppercase',
            color: '#27196C',
          }}
        >
          {title}
        </Typography>
      </Box>
      <Divider sx={{mb: 5}} />
    </>
  )
}

export default TitleBlock
