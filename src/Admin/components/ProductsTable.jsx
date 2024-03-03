import {
  Avatar,
  Button,
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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 50000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 12,
      stock: "",
    };

    dispatch(findProducts(data));
  }, [products.deletedProduct]);
  // console.log("products ", products);

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };
  return (
    <>
      <Card className="mt-2 p-5">
        <CardHeader title="All Products" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.products.content?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell scope="row">{item.title}</TableCell>
                  <TableCell>{item.category.name}</TableCell>
                  <TableCell>{item.discountedPrice}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleProductDelete(item.id)}
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

export default ProductsTable;
