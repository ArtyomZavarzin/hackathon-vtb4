import {Box, Grid, Typography} from '@mui/material'

const ProductItem = ({product}) => {
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Box
          sx={{
            width: '100%',
            height: '350px',
            borderRadius: '8px',
            backgroundColor: '#F5F5F5',
            backgroundImage: `url(${product.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundOrigin: 'content-box',
            padding: '30px',
            backgroundRepeat: 'no-repeat',
          }}
        ></Box>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '47px',
                textTransform: 'uppercase',
                color: '#000000',
              }}
            >
              {product.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '47px',
                textTransform: 'uppercase',
                color: '#000000',
              }}
            >
              {product.price}р
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductItem
