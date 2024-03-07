import { Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
const Cart = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { cart } = useSelector((store) => store);
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div className="w-10/12 mx-auto my-10">
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} md={7} xl={8}>
          <div className="space-y-5">
            {cart.cart?.cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={4.5} xl={3.5} sx={{ marginY: { xs: 5, md: 0 } }}>
          <div className="border shadow-xl p-5 space-y-4 sticky top-36 font-semibold rounded-xl">
            <h2 className="font-bold text-base xl:text-xl text-gray-500 uppercase">
              Price Details
            </h2>
            <hr className="border" />
            <p className="flex text-sm xl:text-base justify-between">
              <span>Price ({cart.cart?.totalItem} item)</span>
              <span>&#8377;{cart.cart?.totalPrice}</span>
            </p>
            <p className="flex text-sm xl:text-base justify-between">
              <span>Discount</span>
              <span className="text-green-600">
                -&#8377;{cart.cart?.discount}
              </span>
            </p>
            <p className="flex text-sm xl:text-base justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </p>
            <hr className="border" />

            <p className="flex justify-between font-bold xl:text-lg">
              <span>Total Amount</span>
              <span>&#8377;{cart.cart?.totalDiscountedPrice}</span>
            </p>
            <Button
              onClick={handleCheckout}
              variant="contained"
              sx={{
                width: "100%",
                padding: 1.5,
                fontWeight: 600,
                fontSize: { xs: 12, md: 16 },
                color: "white",
              }}
              color="secondary"
            >
              {" "}
              Checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
