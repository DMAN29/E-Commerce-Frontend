import { Grid, colors } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const status = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
    { label: "Returned", value: "returned" },
  ];
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto mt-5 relative">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={12} md={2.5}>
          <div className="border shadow-lg p-5  sticky top-36">
            <h3 className="text-sm md:text-lg xl:text-2xl font-bold mb-2 xl:mb-5">Filter</h3>
            <p className="text-xs md:text-base xl:text-xl font-semibold my-3">Order Status</p>
            <div className=" text-xs md:text-base xl:text-xl md:flex justify-between lg:block ">

            {status.map((item, index) => (
              <p key={index} className=" text-gray-500 my-2">
                <input type="checkbox" name={item.value} value={item.value} />
                <label htmlFor={item.label}>&nbsp;&nbsp;{item.label}</label>
              </p>
            ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
        {[1,1,1,1,1,1,1,1,1,1,1].map((item,index)=><div key={index} className="border shadow my-5  lg:mt-0" onClick={()=>navigate(`/account/order/${2}`)}>

<Grid container justifyContent={"space-between"} sx={{cursor: "pointer"}}>


  <Grid item xs={12} sm={4} >
    <div className="flex items-center space-x-5">
      <div className="px-2 py-4">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/y/g/m/l-sleeveless-shset95222-shae-by-sassafras-original-imaggjzkwyyyezzg.jpeg?q=70"
          alt=""
          className="w-20 h-20 xl:w-[8rem] xl:h-[8rem] object-cover"
        />
      </div>
      <div>
        <p className="font-semibold text-base xl:text-xl my-3">Motorola G62</p>
        <p className="opacity-60 text-sm xl:text-base">
          Ram : 8 GB &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Storage : 128 GB
        </p>
        <p className="opacity-60 text-sm xl:text-base">Color : Black</p>
      </div>
    </div>
  </Grid>
  <Grid item xs={4} sm={2}>
    <p className="font-semibold text-sm xl:text-xl mt-5 px-3">Price : &#8377;19899</p>
  </Grid>
  <Grid item xs={8} sm={4}>
    <div className="mt-5 ">
      <p className="text-sm xl:text-xl font-semibold">
        <AdjustIcon sx={{ color: "green" }} />
        &nbsp;&nbsp; Expected Delivery on Mar 04
      </p>
      <p className="opacity-70 text-xs xl:text-base">Your item Has Been Delivered</p>
    </div>
  </Grid>
  </Grid>
</div>)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Orders;
