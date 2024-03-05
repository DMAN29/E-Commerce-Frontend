import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import AddressCard from "./AddressCard";
import NewAddress from "./NewAddress";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../State/Auth/Action";
const AddressDetails = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, auth.jwt]);
  console.log("authther", auth.user.address);
  return (
    <div className="mt-5 w-10/12 mx-auto">
      <Grid container justifyContent={"space-between"}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            overflow: { xs: "none", md: "auto" },
            height: { md: "25rem" },
            border: "1px solid #E5E7EB",
          }}
        >
          {auth?.user?.address.map((item, index) => (
            <AddressCard key={index} address={item} btnText="Deliver Here" />
          ))}
        </Grid>
        <Grid item xs={12} md={7.5}>
          <NewAddress />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressDetails;
