import React, { useEffect } from "react";
import AddressCard from "../Address/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId));
  };
  return (
    <div className=" mt-5 w-10/12 mx-auto">
      <AddressCard address={order.order?.shippingAddress} />
      <div className="lg:grid grid-cols-3 space-x-8 relative mt-5">
        <div className=" col-span-2 space-y-5">
          {order.order?.orderItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="border shadow-xl p-5 space-y-4 sticky top-36 font-semibold rounded-xl h-[330px]">
          <h2 className="font-bold text-base xl:text-xl text-gray-500 uppercase">
            Price Details
          </h2>
          <hr className="border" />
          <p className="flex text-sm xl:text-base justify-between">
            <span>Price ({order.order?.totalItem} item)</span>
            <span>&#8377;{order.order?.totalPrice}</span>
          </p>
          <p className="flex text-sm xl:text-base justify-between">
            <span>Discount</span>
            <span className="text-green-600">
              -&#8377;{order.order?.discount}
            </span>
          </p>
          <p className="flex text-sm xl:text-base justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </p>
          <hr className="border" />

          <p className="flex justify-between font-bold xl:text-lg">
            <span>Total Amount</span>
            <span>&#8377;{order.order?.totalDiscountedPrice}</span>
          </p>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              padding: 1.5,
              fontWeight: 600,
              fontSize: { xs: 12, md: 16 },
              color: "white",
            }}
            color="secondary"
            onClick={handleCheckout}
          >
            {" "}
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummery;
