import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Admin from "../Admin/Admin";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../State/Auth/Action";
import Unauthorize from "./Unauthorize";

const AdminRouters = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  // const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser(localStorage.getItem("jwt")));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={auth.user?.role === "admin" ? <Admin /> : <Unauthorize />}
        />
      </Routes>
    </>
  );
};

export default AdminRouters;
