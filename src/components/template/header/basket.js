import styled from '@emotion/styled'
import {Box, Button, Grid} from '@mui/material'
import ProductItem from '../../pages/shop-page/product-item'

const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor: '#03A3DF',
  color: 'white',
  fontWeight: 600,
  padding: '6px 24px',
  borderRadius: '20px',
  '&:hover, &.active': {
    backgroundColor: '#03A3DF',
    color: 'white',
  },
}))

const mock = [
  {
    name: 'футболка',
    price: 999,
  },
  {
    name: 'кружка',
    price: 999,
  },
]

const Basket = () => {
  return (
    <>
      <Grid container spacing={4}>
        {mock.map((el, index) => {
          return (
            <Grid item key={index} xs={6}>
              <ProductItem product={el} />
            </Grid>
          )
        })}
      </Grid>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <StyledButton sx={{mt: 2}}>Купить все</StyledButton>
      </Box>
    </>
  )
}

export default Basket
