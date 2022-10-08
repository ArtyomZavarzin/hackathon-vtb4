import {Container, Typography} from '@mui/material'
import {Box} from '@mui/system'

const Footer = () => {
  return (
    <Box sx={{backgroundColor: '#000', color: '#d2d2d7', background: 'rgba(0, 0, 0, 0.9)'}}>
      <Container sx={{my: 3}} maxWidth="lg">
        <Typography>MoreTech 4.0</Typography>
      </Container>
    </Box>
  )
}

export default Footer
