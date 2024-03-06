import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateProductForm = () => {
  const navigate = useNavigate();
  const initialSizes = [
    { name: "S", quantity: 0 },
    { name: "M", quantity: 0 },
    { name: "L", quantity: 0 },
    { name: "XL", quantity: 0 },
  ];
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    price: "",
    discountedPrecent: "",
    size: initialSizes,
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name = name === "size_quantity" ? "quantity" : name.e.target.name;
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prev) => ({
      ...prev,
      size: sizes,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    alert("Product Added Successfully");
    navigate("/admin");
  };
  const renderThirdLevelOptions = () => {
    if (
      productData.topLevelCategory === "men" &&
      productData.secondLevelCategory === "clothing"
    ) {
      return [
        <MenuItem value="shirt">Shirt</MenuItem>,
        <MenuItem value="jeans">Jeans</MenuItem>,
        <MenuItem value="t-shirts">T-Shirt</MenuItem>,
      ];
    } else if (
      productData.topLevelCategory === "women" &&
      productData.secondLevelCategory === "clothing"
    ) {
      return [
        <MenuItem value="tops">Tops</MenuItem>,
        <MenuItem value="dresses">Dresses</MenuItem>,
        <MenuItem value="w-jeans">Jeans</MenuItem>,
      ];
    } else if (
      productData.topLevelCategory === "women" &&
      productData.secondLevelCategory === "accessories"
    ) {
      return [
        <MenuItem value="purse">Purse</MenuItem>,
        <MenuItem value="watches">Watches</MenuItem>,
        <MenuItem value="sunglasses">Sunglass</MenuItem>,
      ];
    } else if (
      productData.topLevelCategory === "men" &&
      productData.secondLevelCategory === "accessories"
    ) {
      return [
        <MenuItem value="watches">Watches</MenuItem>,
        <MenuItem value="sunglasses">Sunglass</MenuItem>,
      ];
    } else {
      return null;
    }
  };

  return (
    <>
      <Typography variant="h3" sx={{ textAlign: "center", pt: 5 }}>
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className="m-10">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Image Url"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percent"
              name="discountedPrecent"
              value={productData.discountedPrecent}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="Discounted Price"
              value={Math.floor(
                productData.price -
                  (productData.discountedPrecent / 100) * productData.price
              )}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Third Level Category"
              >
                {renderThirdLevelOptions()}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.size.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Size Name"
                  name="name"
                  inputProps={{ readOnly: true }}
                  value={size.name}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  name="size_quantity"
                  type="number"
                  onChange={(e) => handleSizeChange(e, index)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              size="large"
              type="submit"
              fullWidth
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default CreateProductForm;
