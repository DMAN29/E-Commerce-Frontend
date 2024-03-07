import React from "react";
import { useLocation } from "react-router-dom";

const RatingReview = () => {
  const location = useLocation();
  const { product } = location.state;
  //   console.log(product);
  return (
    <>
      <div className="w-10/12 mx-auto mt-5 shadow-lg flex">
        <img
          src={product.imageUrl}
          alt=""
          className="h-60 p-5  w-60 object-cover object-top"
        />
        <div className="">
          <p className="my-5 text-xl font-semibold ">
            <span> Brand: </span>
            {product.brand}
          </p>
          <p className="my-3 text-lg font-semibold">
            <span>Title: </span>
            {product.title}
          </p>
          <p className="my-3 font-semibold">
            <span>Color :</span>
            {product.color}
          </p>
        </div>
      </div>
    </>
  );
};

export default RatingReview;
