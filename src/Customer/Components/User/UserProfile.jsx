import { Avatar, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import { useLocation } from "react-router-dom";
import AddressCard from "../Address/AddressCard";

const UserProfile = () => {
  const location = useLocation();
  const { user } = location.state;
  console.log("User", user);
  return (
    <div className="w-10/12 mt-20 mx-auto">
      <Grid container>
        <Grid item xs={4}>
          <Avatar
            sx={{
              bgcolor: deepPurple[500],
              color: "white",
              cursor: "pointer",
              width: 250,
              margin: "auto",
              height: 250,
              fontSize: 120,
              position: "sticky",
              top: 50,
            }}
          >
            {user?.firstName[0].toUpperCase()}
          </Avatar>
        </Grid>
        <Grid item xs={8}>
          <div className="flex justify-around">
            <p className="text-2xl font-semibold text-violet-700">
              NAME :{" "}
              <span className="text-gray-500">
                {user.firstName.toUpperCase() +
                  " " +
                  user.lastName.toUpperCase()}
              </span>
            </p>
            <p className="text-2xl font-semibold text-violet-700">
              E-MAIL :{" "}
              <span className="text-gray-500">{user.email.toUpperCase()}</span>
            </p>
          </div>
          <div className="font-bold text-xl mt-5 border rounded-xl">
            <p className="bg-gray-300 text-center py-2 rounded-t-xl">
              Saved Addresses
            </p>
            <div className="grid grid-cols-2 gap-4">
              {user.address.map((item) => (
                <AddressCard address={item} />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
