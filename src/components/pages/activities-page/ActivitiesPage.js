import React, {useState} from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import {AvailableActivities} from './components/available-activities/AvailableActivities'

import './ActivitiesPage.css'
import {TabPanel} from './components/TabPanel/TabPanel'

export const ActivitiesPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="activities-page">
      <Box sx={{color: '#fff'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            sx: {
              display: 'none',
            },
          }}
        >
          <Tab label="Доступные" />
          <Tab label="Рейтинг" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AvailableActivities />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Рейтинг
      </TabPanel>
    </div>
  )
}
