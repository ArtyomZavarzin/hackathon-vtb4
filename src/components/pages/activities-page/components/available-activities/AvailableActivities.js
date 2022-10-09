import React, {useCallback, useState} from 'react'
import styled from '@emotion/styled'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'

import {ActivityListItem} from './activity-list-item/ActivityListItem'

import './AvailableActivities.css'

const StyledButton = styled(Button)(({theme}) => ({
  padding: '6px 24px',
  height: 'auto',
  backgroundColor: '#03A3DF',
  color: 'white',
  fontWeight: 600,
  borderRadius: '20px',
  '&:hover, &.active': {
    backgroundColor: '#03A3DF',
    color: 'white',
  },
}))

export const AvailableActivities = () => {
  const [isOpenCreateActivityModal, setIsOpenCreateActivityModal] = useState(false)
  const [type, setType] = useState('nft')

  const handleOpenCreateActivityModal = useCallback(() => setIsOpenCreateActivityModal(true), [])
  const handleCloseCreateActivityModal = useCallback(() => setIsOpenCreateActivityModal(false), [])
  const handleChangeType = useCallback(event => {
    setType(event.target.value)
  }, [])

  return (
    <div>
      <div>
        <p className="title-block">Я Исполнитель</p>
        <ActivityListItem
          title={'Пройти курс по JS'}
          description={'Необходимо пройти курс по JS разработке'}
          price={50}
        />
      </div>
      <div>
        <div className="author-block">
          <p className="title-block">Я Автор</p>
          <StyledButton sx={{mt: 2}} onClick={handleOpenCreateActivityModal}>
            Создать
          </StyledButton>
        </div>
        <ActivityListItem title={'Название'} description={'Описание'} price={50} />
      </div>

      <Dialog open={isOpenCreateActivityModal} onClose={handleCloseCreateActivityModal}>
        <DialogTitle>Создание записи</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="title" label="Название" fullWidth variant="outlined" />
          <TextField margin="dense" id="description" label="Описание" fullWidth variant="outlined" multiline rows={4} />
          <FormControl sx={{minWidth: 170, mt: 1}}>
            <InputLabel id="type">Тип награды</InputLabel>
            <Select labelId="type" id="type" label="Тип награды" value={type} onChange={handleChangeType}>
              <MenuItem value="nft">NFT</MenuItem>
              <MenuItem value="ruble">Digital Ruble</MenuItem>
            </Select>
          </FormControl>
          {type !== 'nft' && (
            <TextField margin="dense" id="numberOfCoins" label="Количество монет" fullWidth variant="outlined" />
          )}
          {type === 'nft' && <TextField margin="dense" id="nftId" label="NFT ID" fullWidth variant="outlined" />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCreateActivityModal}>Отменить</Button>
          <Button onClick={handleCloseCreateActivityModal}>Создать</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
