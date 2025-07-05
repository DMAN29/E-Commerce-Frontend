import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "../../../Data/MainCarouselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className="w-full h-[650px] object-cover cursor-pointer"
      role="presentation"
      src={item.src}
      alt={`carousel-${index}`}
    />
  ));

  return (
    <AliceCarousel
      items={items}
      infinite
      autoPlay
      autoPlayInterval={3000}
      disableButtonsControls
      animationDuration={800}
    />
  );
};

export default MainCarousel;
