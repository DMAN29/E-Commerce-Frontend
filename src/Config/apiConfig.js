import axios from "axios";

// const backend = "http://localhost:5000";
const backend = `https://shop-now-uxii.onrender.com`;
export const API_BASE_URL = `${backend}`;

const jwt = localStorage.getItem("jwt");
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
