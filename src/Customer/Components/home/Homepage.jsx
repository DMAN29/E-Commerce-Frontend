import React, { useEffect, useState } from "react";
import MainCarousel from "./MainCarousel";
import SectionCarousel from "./SectionCarousel";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";

const Homepage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const categories = [
    { name: "tops", state: "topData", section: "Tops" },
    { name: "shirt", state: "shirtData", section: "Shirt" },
    { name: "dresses", state: "dressData", section: "Dresses" },
    { name: "w-jeans", state: "wJeansData", section: "Women Jeans" },
    { name: "jeans", state: "menJeansData", section: "Mens Jeans" },
    { name: "t-shirts", state: "tshirtData", section: "T-Shirts" },
    { name: "sunglasses", state: "sunglassesData", section: "Sunglasses" },
    { name: "watches", state: "watchesData", section: "Watches" },
    { name: "purse", state: "purseData", section: "Purse" },
  ];

  useEffect(() => {
    categories.forEach(({ name }) => {
      dispatch(
        findProducts({
          category: name,
          colors: [],
          sizes: [],
          minPrice: 0,
          maxPrice: 10000,
          minDiscount: 0,
          sort: "price_low",
          pageNumber: 0,
          pageSize: 12,
          stock: null,
        })
      );
    });
  }, [dispatch]);

  const [stateData, setStateData] = useState({
    topData: [],
    shirtData: [],
    wJeansData: [],
    menJeansData: [],
    tshirtData: [],
    dressData: [],
    sunglassesData: [],
    watchesData: [],
    purseData: [],
  });

  useEffect(() => {
    categories.forEach(({ name, state }) => {
      const content = products.products?.content;
      if (content && content.length > 0 && content[0].category.name === name) {
        setStateData((prevData) => ({
          ...prevData,
          [state]: content || [],
        }));
      }
    });
  }, [categories, products]);

  return (
    <>
      <MainCarousel />
      {categories.map(
        ({ state, section }) =>
          stateData[state].length != 0 && (
            <SectionCarousel
              key={section}
              data={stateData[state]}
              section={section}
            />
          )
      )}
    </>
  );
};

export default Homepage;
