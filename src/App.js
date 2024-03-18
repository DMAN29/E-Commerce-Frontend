import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
const App = () => {
  useEffect(
    () =>
      alert(
        "Hello Users This is an information regarding the website. Its all the api's are protected so firstly we have to login or signup our Account first \n\n One of the Created Profile Details : \n Email : ram@gmail.com \n Password : ram@123"
      ),
    []
  );
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </>
  );
};

export default App;
