import { Grid } from "@mui/material";
import React from "react";
import Achievement from "./Achievement";
import MonthlyOverview from "./MonthlyOverview";
import DashBoardProductTable from "./DashBoardProductTable";
import DashBoardOrderTable from "./DashBoardOrderTable";

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
            <DashBoardProductTable />
          </Grid>
          <Grid item xs={12} md={6}>
            <DashBoardOrderTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AdminDashboard;
