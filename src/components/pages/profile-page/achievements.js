import {Divider, Typography, Box, Grid, Modal, Link, Button} from '@mui/material'
import {useState} from 'react'
import ModalTransition from '../../common-components/modal-transition-up'
import TitleBlock from './title-block'
import fig1 from '../../../assets/img/AbstractImages.png'
import fig2 from '../../../assets/img/AbstractImages2.png'
import fig3 from '../../../assets/img/Acstract3.png'
import fig4 from '../../../assets/img/Acstract4.png'

const mock = [
  {
    name: 'С отправкой',
    url: fig1,
  },
  {
    name: 'Коллекционер',
    url: fig2,
  },
  {
    name: 'За выслугу лет',
    url: fig3,
  },
  {
    name: 'Писатель',
    url: fig4,
  },
]

const Achievements = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <TitleBlock title="Достижения" subtitle={'Уровень: мастер'} />

      <Grid container spacing={4}>
        {mock.slice(0, 3).map(el => {
          return (
            <Grid item xs={4}>
              <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <Box
                  sx={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    backgroundColor: '#F5F5F5',
                    backgroundImage: `url(${el.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundOrigin: 'content-box',
                    padding: '10px',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '67px',
                    textTransform: 'uppercase',
                    color: '#27196C',
                  }}
                >
                  {el.name}
                </Typography>
              </Box>
            </Grid>
          )
        })}
      </Grid>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Link component={Button} sx={{mb: 2, mt: 2}} underline="none" color="#03A3DF" onClick={() => setIsOpen(true)}>
          Посмотреть все
        </Link>
      </Box>

      <Divider sx={{mb: 5}} />
      <ModalTransition isOpen={isOpen} onClose={() => setIsOpen(false)} maxWidth="md" title="Все достижения">
        <>
          <Grid container spacing={4}>
            {mock.map(el => {
              return (
                <Grid item xs={4}>
                  <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Box
                      sx={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        backgroundColor: '#F5F5F5',
                        backgroundImage: `url(${el.url})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundOrigin: 'content-box',
                        padding: '10px',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></Box>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '67px',
                        textTransform: 'uppercase',
                        color: '#27196C',
                      }}
                    >
                      {el.name}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </>
      </ModalTransition>
    </>
  )
}

export default Achievements
