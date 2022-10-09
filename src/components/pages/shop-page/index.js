import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
  Paper,
  Box,
  Link as MuiLink,
  ButtonBase,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FilledInput,
  Link,
} from '@mui/material'
import ProductItem from './product-item'

import fig1 from '../../../assets/img/AbstractImages.png'
import fig2 from '../../../assets/img/AbstractImages2.png'
import fig3 from '../../../assets/img/Acstract3.png'
import fig4 from '../../../assets/img/Acstract4.png'

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   buttonSpacing: {
//     marginLeft: theme.spacing(1),
//   },
// }))

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
  {
    name: 'мышь',
    price: 1500,
    url: 'https://thumb.tildacdn.com/tild3235-6335-4437-a566-343232383632/-/resize/91x/-/format/webp/favpng_computefr-mou.png',
  },
  {
    name: 'термос',
    price: 999,
    url: 'https://thumb.tildacdn.com/tild6138-3731-4263-b536-333361633737/-/resize/91x/-/format/webp/istockphoto-10169858.png',
  },
]

const ShopPage = () => {
  return (
    <>
      <Typography
        component="p"
        sx={{
          mb: 5,
          fontWeight: '400',
          fontSize: '50px',
          lineHeight: '78px',
          textAlign: 'center',
          color: '#000000',
          opacity: 0.7,
        }}
      >
        Фирменный мерч
      </Typography>
      <Grid container spacing={4}>
        {mock.map((el, index) => {
          return (
            <Grid key={index} item xs={4}>
              <ProductItem product={el} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ShopPage
