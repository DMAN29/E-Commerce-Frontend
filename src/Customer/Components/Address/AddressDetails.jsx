import { Grid } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import NewAddress from "./NewAddress";
const AddressDetails = () => {
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
          {[1, 1, 1, 1, 1].map((item, index) => (
            <AddressCard key={index} btnText="Deliver Here" />
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
