import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Customer/Components/home/Homepage";
import Navbar from "../Customer/Components/Navbar/Navbar";
import Footer from "../Customer/Components/Footer/Footer";
import Cart from "../Customer/Components/Cart/Cart";
import ProductPage from "../Customer/Components/product/ProductPage";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import Checkout from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Orders/Orders";
import OrderInfo from "../Customer/Components/Orders/OrderInfo";
import PaymentSuccess from "../Customer/Components/Payment/PaymentSuccess";
import UserProfile from "../Customer/Components/User/UserProfile";
import RatingReview from "../Customer/Components/Orders/RatingReview";
const CustomerRouters = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/login" element={<Homepage />} />
          <Route path="/register" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:levelOne/:levelTwo/:levelThree"
            element={<ProductPage />}
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderInfo />} />
          <Route path="/payment/:orderId" element={<PaymentSuccess />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/rating-review" element={<RatingReview />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CustomerRouters;
