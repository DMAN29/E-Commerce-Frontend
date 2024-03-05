import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const OrderTracker = ({ activeStep }) => {
  const steps = ["Placed", "Order Confirmed", "Shipped", "Delivered"];

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      sx={{ "& .MuiStepLabel-label": { fontSize: { xs: 10, md: 16 } } }}
    >
      {steps.map((label) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default OrderTracker;
