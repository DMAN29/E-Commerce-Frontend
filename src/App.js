import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouters";
const App = () => {
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
