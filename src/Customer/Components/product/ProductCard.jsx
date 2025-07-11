import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log("product", product);
  return (
    <>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-[80%] md:w-50  m-1 md:m-3 cursor-pointer mx-auto  shadow-gray-500 hover:shadow-xl text-xs md:text-base border"
      >
        <div className="h-40 md:h-80">
          <img
            className="w-full h-full object-cover object-top-left"
            src={product.imageUrl}
            alt=""
          />
        </div>
        <div className="p-1 md:p-3 transition ease-out  bg-white delay-150 hover:-translate-y-5 ">
          <h4 className=" font-bold text-gray-600">{product.brand}</h4>
          <p className="">{product.title}</p>
          <div className="space-x-3">
            <span className="font-semibold">
              {/* {product.price*(100-product.discountPersent)/100}*/}
              &#8377;
              {product.discountedPrice}
            </span>
            <span className="line-through">&#8377; {product.price} </span>
            <span className="text-green-600 font-semibold">
              {product.discountPercent}% off
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
