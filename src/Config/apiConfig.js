import axios from "axios";

const railway = "https://e-commerce-backend-production-c448.up.railway.app";
const localhost = "http://localhost:8080";
export const API_BASE_URL = `${localhost}`;
const jwt = localStorage.getItem("jwt");
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
