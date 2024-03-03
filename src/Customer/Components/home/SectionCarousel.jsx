import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import CarouselCards from './CarouselCards';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
const SectionCarousel = ({data,section}) => {
    const [active,setActive] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1200: {items:4},
        1400: { items: 5.5 },

    };
    const slidePre = ()=>{setActive(active-1)};
    const slideNext = ()=>{setActive(active+1)}; 
   
    const items = data.map((item)=><CarouselCards product={item}/>)
  return <>
  <div className='w-11/12 mx-auto px-4 lg:px-8 shadow-lg shadow-gray-300 rounded-lg bg-slate-100 my-5 '>
    <h2 className='text-3xl p-2 font-semibold text-center'>{section}</h2>
    <div className='relative p-5'>
     <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        activeIndex={active}
    />
    {active!==0 && <Button variant="contained" onClick={slidePre} sx={{position:"absolute",top:"45%",zIndex:"50",left:"-3rem" ,background:"white",color:"black"}}><ArrowBackIosIcon/></Button>}
    {active!== data.length-5 &&<Button variant="contained" onClick={slideNext} sx={{position:"absolute",top:"45%",zIndex:"50",right:"-3rem",background:"white",color:"black" }}><ArrowForwardIosIcon/></Button>}
    </div>
  </div>
  </>
}

export default SectionCarousel