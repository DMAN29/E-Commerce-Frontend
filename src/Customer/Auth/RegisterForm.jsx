import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../../State/Auth/Action";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) dispatch(getUser(jwt));
  }, [jwt, auth.jwt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      role: "customer",
    };
    dispatch(register(userData))
      .then(() => {
        console.log("userData", userData);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ paddingY: "0.8rem" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex  justify-center items-center py-2 ">
        <p>You don't have an account?</p>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </div>
    </>
  );
};

export default RegisterForm;
