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
    price: 1999,
    url: 'https://thumb.tildacdn.com/tild6238-3361-4739-b239-303132646462/-/resize/352x/-/format/webp/More_Tech____2.png',
  },
  {
    name: 'шоппер',
    price: 999,
    url: 'https://thumb.tildacdn.com/tild3739-3930-4531-a238-646338616135/-/resize/254x/-/format/webp/18663467.png',
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
