import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import AdminDashboard from "./components/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <DescriptionIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PersonIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <LocalShippingIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <PostAddIcon /> },
  //   { name: "", path: "" },
];
const Admin = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "250px",
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText onClick={() => navigate("/")}>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <div>
        <div className="flex">
          <CssBaseline />
          <div className="border-r h-[100vh] fixed">{drawer}</div>

          <div className=" ml-[250px] w-full">
            <Box>
              <Routes>
                <Route path="/" element={<AdminDashboard />} />
                <Route path="/product/create" element={<CreateProductForm />} />
                <Route path="/products" element={<ProductsTable />} />
                <Route path="/customers" element={<CustomersTable />} />
                <Route path="/orders" element={<OrdersTable />} />
              </Routes>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
