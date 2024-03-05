import { Grid, colors } from "@mui/material";
import React, { useEffect } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../State/Order/Action";

const Orders = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);
  // console.log("orderHistory ", order);
  const navigate = useNavigate();

  // Function to format the date and add 5 days
  const formatDateAndAddDays = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 5);
    return date;
  };

  // Function to check if the date has passed
  const isDatePassed = (dateString) => {
    const currentDate = new Date();
    const deliveryDate = formatDateAndAddDays(dateString);
    return currentDate > deliveryDate;
  };

  return (
    <div className="w-11/12 mx-auto mt-5 relative">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12}>
          {order?.orders?.map((items) =>
            items.orderItems?.map((item, index) => (
              <div
                key={index}
                className="border shadow my-5  lg:mt-0"
                onClick={() => navigate(`/account/order/${item.id}`)}
              >
                <Grid
                  container
                  justifyContent={"space-between"}
                  sx={{ cursor: "pointer" }}
                >
                  <Grid item xs={12} sm={4}>
                    <div className="flex items-center space-x-5">
                      <div className="px-2 py-4">
                        <img
                          src={item.product.imageUrl}
                          alt=""
                          className="w-20 h-20 xl:w-[8rem] xl:h-[8rem] object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-base xl:text-xl my-3">
                          {item.product.brand}
                        </p>
                        <p className="opacity-60 text-sm xl:text-base">
                          Title : {item.product.title}
                        </p>
                        <p className="opacity-60 text-sm xl:text-base">
                          Color : {item.product.color.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={2}>
                    <p className="font-semibold text-sm xl:text-xl mt-5 px-3">
                      Price : &#8377;{item.discountedPrice}
                    </p>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <div className="mt-5 ">
                      <p className="text-sm xl:text-xl font-semibold">
                        <AdjustIcon sx={{ color: "green" }} />
                        &nbsp;&nbsp; Expected Delivery on{" "}
                        {formatDateAndAddDays(
                          items.createdAt
                        ).toLocaleDateString("en-US", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                      {isDatePassed(items.createdAt) && ( // Check if the date has passed
                        <p className="opacity-70 text-xs xl:text-base">
                          Your item Has Been Delivered
                        </p>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Orders;
