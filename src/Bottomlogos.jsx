import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Divider from '@mui/material/Divider';
import './App.css'
import { IconButton } from '@mui/material';


export default function() {
  return (
    <div className='Bottomlogos'>
        <IconButton type='Button' className='Location' sx={{color: 'black'}}>
        <LocationOnIcon sx={{marginRight: 1}}/>
        </IconButton>
        <h3>Location</h3>
        <Divider sx={{ height: 28, m: 0.5, paddingLeft: 4}} orientation="vertical"/>
        <IconButton className='Calendar' sx={{color: 'black'}}>
        <CalendarTodayIcon sx={{marginLeft: 4, marginRight:1}}/>
        </IconButton>
        <h3>Dates</h3>
    </div>
  );
}
