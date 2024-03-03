import { Avatar, Rating } from '@mui/material'
import React from 'react'
import { deepOrange, deepPurple } from '@mui/material/colors';
const ReviewCard = () => {
  return (
    <div className='flex m-5'>
    <Avatar sx={{ bgcolor: deepOrange[500]}}>N</Avatar>
    <div className='mx-5'>
      <h2 className='md:text-xl font-semibold'>Name</h2>
      <p className='text-xs md:text-base'>Feb 1st, 2023</p>
      <Rating value={4.6} precision={.5}  readOnly  sx={{fontSize:{xs:16,md:24}}}/>
    </div>
    </div>
  )
}

export default ReviewCard