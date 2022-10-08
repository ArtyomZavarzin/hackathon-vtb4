import {Divider, Typography, Box, Grid, Modal, Link, Button} from '@mui/material'
import {useState} from 'react'
import ModalTransition from '../../common-components/modal-transition-up'
import TitleBlock from './title-block'

const mock = [
  {
    name: '1 достижение',
  },
  {
    name: '2 достижение',
  },
  {
    name: '3 достижение',
  },
  {
    name: '4 достижение',
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
                <Box sx={{width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#F5F5F5'}}></Box>
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
                    <Box sx={{width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#F5F5F5'}}></Box>
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
