import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import ProductsTable from "./ProductsTable";

const AdminDashboard = () => {
  return (
    <>
      <div className="p-5">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Achievement />
          </Grid>
          <Grid item xs={12} md={8}>
            <MonthlyOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductsTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AdminDashboard;
