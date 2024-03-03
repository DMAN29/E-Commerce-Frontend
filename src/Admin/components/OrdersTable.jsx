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

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
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

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmedOrder(orderId));
  };
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

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
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
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
                  <TableCell>
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(e) => handleClick(e, index)}
                      aria-controls={`basic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      disabled={item.orderStatus === "PENDING"}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                      PaperProps={{
                        style: {
                          border: "2px solid gray",
                          boxShadow: "none",
                        },
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleConfirmedOrder(item.id);
                          handleClose(index);
                        }}
                      >
                        CONFIRMED
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleShippedOrder(item.id);
                          handleClose(index);
                        }}
                      >
                        SHIPPED
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleDeliveredOrder(item.id);
                          handleClose(index);
                        }}
                      >
                        DELIVERED
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteOrder(item.id)}
                    >
                      Delete
                    </Button>
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

export default OrdersTable;
