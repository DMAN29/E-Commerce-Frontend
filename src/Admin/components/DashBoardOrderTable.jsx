import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmedOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const DashBoardOrderTable = () => {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.deletedOrder,
  ]);

  // Reverse the order of the array
  const reversedOrders = adminOrder.orders?.slice(-10).reverse();

  // console.log("Admin Orders", adminOrder);
  return (
    <>
      <Card className="mt-2 p-5">
        <CardHeader title="Order Table" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reversedOrders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.totalDiscountedPrice}</TableCell>
                  <TableCell>
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-[#8ba74b]"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#4960c7]"
                          : item.orderStatus === "PLACED"
                          ? "bg-[#4bb15c]"
                          : item.orderStatus === "PENDING"
                          ? "bg-[#737773]"
                          : "bg-[#b16060]"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default DashBoardOrderTable;
