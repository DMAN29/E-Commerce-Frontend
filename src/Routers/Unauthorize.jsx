import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Unauthorize = () => {
  const navigate = useNavigate();

  return (
    <div>
      Unauthorize <Button onClick={() => navigate("/")}>Go Back</Button>
    </div>
  );
};

export default Unauthorize;
