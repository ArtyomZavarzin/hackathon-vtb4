import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Grid, Container, Button, Typography, Badge} from '@mui/material'

const HeaderPageBlock = ({title}) => {
  return (
    <Box sx={{height: '234px', display: 'flex', alignItems: 'end'}}>
      <Typography
        variant="h2"
        sx={{fontWeight: 700, fontSize: '70px', mb: 5, textTransform: 'uppercase', color: 'white'}}
      >
        {title}
      </Typography>
    </Box>
  )
}
export default HeaderPageBlock
