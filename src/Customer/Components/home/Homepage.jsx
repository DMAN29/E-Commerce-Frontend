import React from "react";
import MainCarousel from "./MainCarousel";
import SectionCarousel from "./SectionCarousel";
import { dress } from "../../../Data/Women/dress";
const Homepage = () => {
  return (
    <>
      <MainCarousel />
      <SectionCarousel data={dress} section="Mens Kurta" />
      <SectionCarousel data={dress} section="Dress" />
    </>
  );
};

export default Homepage;
