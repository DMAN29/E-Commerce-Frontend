import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../State/Auth/Action";
import {
  Avatar,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { amber, deepPurple, green, orange } from "@mui/material/colors";

const CustomersTable = () => {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const colors = [deepPurple[500], orange[500], green[500], amber[500]];
  useEffect(() => {
    if (jwt) dispatch(getAllUsers(jwt));
  }, [jwt, auth.jwt]);
  console.log("auth he hu", auth.users[0]?.firstName[0].toUpperCase());
  return (
    <>
      <Card className="mt-2 p-5">
        <CardHeader title="All Users" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email Id</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auth.users?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Avatar
                      sx={{
                        bgcolor: colors[index % colors.length], // Cycle through colors based on index
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {item.firstName?.[0]?.toUpperCase()}
                    </Avatar>
                  </TableCell>
                  <TableCell scope="row">{item.firstName}</TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role?.toUpperCase()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default CustomersTable;
