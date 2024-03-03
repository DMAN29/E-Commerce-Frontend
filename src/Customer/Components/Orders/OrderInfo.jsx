import React from "react";
import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OrderTracker from "./OrderTracker";
import AddressCard from "../Address/AddressCard";

const steps = [
  "Placed",
  "Order Confirmed",
  "Shipped",
  "Out For Delivery",
  "Delivered",
];

const OrderInfo = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="w-10/12 mx-auto mt-5">
      <div className="shadow">
        <AddressCard btnText="" />
      </div>
      <div className="border mt-5 pt-5 pb-16 md:pt-16 shadow relative">
        <Box sx={{ width: "100%" }}></Box>
        <OrderTracker activeStep={activeStep} />
        <Button
          color="secondary"
          sx={{
            fontSize: { xs: 12, md: 14, xl: 18 },
            paddingRight: { xs: 2, md: 5, xl: 10 },
            position: "absolute",
            right: 5,
            bottom: 20,
          }}
        >
          Cancel Order
        </Button>
      </div>
      {[1, 1, 1, 1, 1].map((item, index) => (
        <div className="flex justify-between items-center border shadow my-5">
          <div className="flex items-center w-1/2">
            <div className="p-4 ">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70"
                alt=""
                className="w-[8rem] h-[8rem] object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-semibold my-2">OnePlus NeckBand</p>
              <p className="opacity-60">
                Color : Black &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity : 1
              </p>
              <p className="font-semibold text-lg mt-2">Seller : Oneplus</p>
              <p className="font-semibold text-lg">Price : &#8377;1099 </p>
            </div>
          </div>
          <Button color="secondary" sx={{ marginX: 5, fontSize: 18 }}>
            <StarOutlineIcon /> &nbsp;&nbsp; Rate & Review Product
          </Button>
        </div>
      ))}
    </div>
  );
};

export default OrderInfo;
