import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import './ActivityListItem.css'

export const ActivityListItem = ({title, description, price}) => {
  return (
    <div className="activity-list-item">
      <div>
        <p className="title-activity">{title}</p>
        <p className="description">{description}</p>
      </div>
      <p>{price} ₽</p>
      <ArrowForwardIosIcon color="primary" />
    </div>
  )
}
