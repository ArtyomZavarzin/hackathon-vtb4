import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Grid, Container, Button, Typography, Badge} from '@mui/material'
import {ReactComponent as Arrow} from '../../../assets/figures/arrow.svg'

const ShopBlock = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{height: '234px', display: 'flex', alignItems: 'center', ml: '134px'}}>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{cursor: 'pointer'}}
            onClick={() => {
              navigate('/activities')
            }}
          >
            <Grid item>
              <Arrow width="150px" />
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{color: 'white'}}>
                Больше поинтов
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            spacing={2}
            sx={{cursor: 'pointer'}}
            onClick={() => {
              navigate('/shop/nft')
            }}
          >
            <Grid item>
              <Typography variant="h4" sx={{color: 'white'}}>
                NFT маркет
              </Typography>
            </Grid>
            <Grid item>
              <Arrow width="150px" style={{transform: 'scale(-1,1)'}} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ShopBlock
