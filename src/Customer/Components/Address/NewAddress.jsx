import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
const NewAddress = () => {
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [zipError, setZipError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, setter, setError, length) => {
    const { value } = event.target;
    setter(value);
    if (value.length !== length) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (zip.length !== 6 || phone.length !== 10) {
      setZipError(zip.length < 6);
      setPhoneError(phone.length < 10);
      return; // Stop submission if fields are not filled correctly
    }
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("mobile"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("address", address);
  };

  return (
    <div className="border rounded-lg shadow-lg p-5 text-sm md:text-base lg:text-lg xl:text-xl space-y-5 mt-5 lg:mt-0">
      <form action="" className=" space-y-5" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstName"
              id="firstName"
              label="First Name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="lastName"
              id="lastName"
              label="Last Name"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="streetAddress"
              label="Street Address"
              name="streetAddress"
              multiline
              required
              fullWidth
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField name="city" id="city" label="City" required fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="state"
              id="state"
              label="State / Region"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="zipCode"
              id="zipCode"
              label="Zip / Postal Code"
              required
              type="number"
              fullWidth
              value={zip}
              onChange={(event) => handleChange(event, setZip, setZipError, 6)}
              error={zipError}
              helperText={zipError && "Field not filled correctly"}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mobile"
              id="mobile"
              label="Mobile No."
              required
              fullWidth
              type="number"
              value={phone}
              onChange={(event) =>
                handleChange(event, setPhone, setPhoneError, 10)
              }
              error={phoneError}
              helperText={phoneError && "Field not filled correctly"}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: 42, fontSize: { xs: 12, md: 16 } }}
          type="submit"
        >
          Add Address
        </Button>
      </form>
    </div>
  );
};

export default NewAddress;
