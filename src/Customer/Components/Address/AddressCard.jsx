import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";

const AddressCard = ({ address, btnText }) => {
  // console.log("address", address);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateOrder = () => {
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };
  return (
    <div className=" px-2 py-2 md:py-5 text-xs md:text-sm xl:text-base relative">
      <h2 className="text-base md:text-lg xl:text-xl font-semibold py-2">
        {address?.firstName + " " + address?.lastName}
      </h2>
      <p>{address?.streetAddress}</p>
      <p>{address?.city + ", " + address?.state + ", " + address?.zipCode}</p>
      <h4 className="text-sm md:text-base xl:text-lg font-semibold inline">
        Phone Number :
      </h4>
      <span>{" " + address?.mobile}</span>
      {btnText !== undefined ? (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            height: { xs: 32, lg: 42 },
            fontSize: { xs: 12, md: 16 },
            position: { xl: "absolute" },
            right: { xl: 10 },
            bottom: { xl: 16 },
            marginTop: 1,
          }}
          onClick={handleCreateOrder}
        >
          {btnText}
        </Button>
      ) : null}
    </div>
  );
};

export default AddressCard;
