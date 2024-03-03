import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { useLocation } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div className="border p-2 shadow-lg rounded-lg">
      <div className="flex">
        <div className="h-24 w-24 md:w-32 xl:w-48 md:h-32 xl:h-48">
          <img
            src={item.product.imageUrl}
            alt=""
            className="h-full w-full object-cover "
          />
        </div>
        <div className="my-auto mx-5">
          <h2 className="font-bold xl:text-xl">{item.product.title}</h2>
          <p className="font-semibold text-xs xl:text-base opacity-60">
            Seller : {item.product.brand}
          </p>
          <p className="font-semibold text-xs xl:text-base opacity-60">
            Color : {item.product.color} | Size : {item.size}
          </p>
          {location.pathname !== "/cart" ? (
            <p className="font-semibold text-xs xl:text-base opacity-60">
              Quantity : {item.quantity}
            </p>
          ) : null}
          <p className="space-x-2 text-sm lg:text-lg my-2 lg:my-5">
            <span className="font-bold">
              &#8377;{item.product.discountedPrice * item.quantity}
            </span>
            <span className="line-through">
              &#8377;{item.product.price * item.quantity}
            </span>
            <span className="font-semibold text-green-600 text-sm">
              {item.product.discountPercent}% off
            </span>
          </p>
        </div>
      </div>
      {location.pathname === "/cart" ? (
        <div className="flex mb-2 ">
          <p className="flex mt-2 items-center w-24 md:w-28 xl:w-48 ml-2">
            <Button
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item.quantity <= 1}
            >
              <RemoveCircleOutlineIcon
                sx={{ fontSize: { xs: 16, md: 20, xl: 24 } }}
              />
            </Button>
            <span className="w-full mx-1 md:mx-3 border text-center text-xs md:text-sm lg:text-base">
              {item.quantity}
            </span>
            <Button onClick={() => handleUpdateCartItem(1)}>
              <ControlPointIcon sx={{ fontSize: { xs: 16, md: 20, xl: 24 } }} />
            </Button>
          </p>
          <Button
            sx={{ fontSize: { xs: 12, md: 18 }, paddingX: { xs: 2, md: 5 } }}
            color="secondary"
            onClick={handleRemoveCartItem}
          >
            Remove
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartItem;
