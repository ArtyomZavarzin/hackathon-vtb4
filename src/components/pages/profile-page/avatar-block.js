import {Box} from '@mui/material'
import catLogo from '../../../assets/img/catlogo.svg'

const AvatarBlock = () => {
  return (
    <>
      <Box
        sx={{
          width: '315px',
          height: '415px',
          backgroundColor: '#FFFFFF',
          border: '10px solid #27196C',
          borderRadius: '40px',
          backgroundImage: `url(${catLogo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
    </>
  )
}

export default AvatarBlock
