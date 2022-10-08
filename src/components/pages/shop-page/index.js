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
    price: 999,
  },
  {
    name: 'кружка',
    price: 999,
  },
  {
    name: 'кофта',
    price: 999,
  },
  {
    name: 'термос',
    price: 999,
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
