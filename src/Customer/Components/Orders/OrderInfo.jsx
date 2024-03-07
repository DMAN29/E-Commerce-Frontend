import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import OrderTracker from "./OrderTracker";
import AddressCard from "../Address/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useNavigate, useParams } from "react-router-dom";

const OrderInfo = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, []);

  useEffect(() => {
    if (order && order.order && order.order.orderStatus) {
      switch (order?.order?.orderStatus) {
        case "SHIPPED":
          setActiveStep(2);
          break;
        case "DELIVERED":
          setActiveStep(3);
          break;
        case "CONFIRMED":
          setActiveStep(1);
          break;
        default:
          setActiveStep(0);
      }
    }
  }, [order]);
  console.log("order.order?.orderItems", order.order?.orderItems);

  return (
    <div className="w-10/12 mx-auto mt-5">
      <div className="shadow">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="border mt-5 pt-5 pb-16 md:pt-16 shadow relative">
        <Box sx={{ width: "100%" }}>
          <OrderTracker activeStep={activeStep} />
        </Box>
      </div>
      {order.order?.orderItems?.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border shadow my-5"
        >
          <div className="flex items-center w-1/2">
            <div className="p-4 ">
              <img
                src={item.product.imageUrl}
                alt=""
                className="w-[8rem] h-[8rem] object-cover"
              />
            </div>
            <div>
              <p className="text-xl font-semibold my-2">{item.product.brand}</p>
              <p className="font-semibold text-lg mt-2">{item.product.title}</p>
              <p className="font-semibold text-lg">
                Price : &#8377;{item.discountedPrice}{" "}
              </p>
              <p className="opacity-60">
                Color : {item.product.color} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Quantity : {item.quantity}
              </p>
            </div>
          </div>
          <Button
            color="secondary"
            sx={{ marginX: 5, fontSize: 18 }}
            onClick={() =>
              navigate("/rating-review", {
                state: { product: item?.product },
              })
            }
          >
            <StarOutlineIcon /> &nbsp;&nbsp; Rate & Review Product
          </Button>
        </div>
      ))}
    </div>
  );
};

export default OrderInfo;
