import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useLocation } from "react-router-dom";
import OrderSummery from "./OrderSummery";
import AddressDetails from "../Address/AddressDetails";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) - 1;

  return (
    <div className="mt-5">
      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {step == 1 ? <AddressDetails /> : <OrderSummery />}
      </Box>
    </div>
  );
}
