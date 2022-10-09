import {Box, Button, CircularProgress, Dialog, DialogContent, Grid, Slide, TextField, Typography} from '@mui/material'
import {forwardRef, useEffect, useState} from 'react'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalTransition = ({isOpen, onClose, children, maxWidth = 'sm', title}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      fullWidth={true}
      maxWidth={maxWidth}
      TransitionComponent={Transition}
      scroll="body"
    >
      <DialogContent sx={{pb: 5}}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '67px',
            textTransform: 'uppercase',
            color: '#03A3DF',
            mb: 3,
          }}
        >
          {title}
        </Typography>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default ModalTransition
