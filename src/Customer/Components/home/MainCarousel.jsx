import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from '../../../Data/MainCarouselData';


const MainCarousel = () => {
    const items = MainCarouselData.map((item)=><img className="cursor-pointer" role='presentation' src={item.src} alt=''/>)
return <>
    <AliceCarousel
        items={items}
        infinite
        autoPlay
        autoPlayInterval={1000}
        disableButtonsControls
    />
</>
}
export default MainCarousel;