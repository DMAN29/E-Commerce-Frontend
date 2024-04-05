import axios from "axios";

const awsBackend =
  "http://shopnow-env.eba-z7cqpr2m.ap-southeast-2.elasticbeanstalk.com";
export const API_BASE_URL = `${awsBackend}`;

// const localhost = "http://localhost:8080";
// export const API_BASE_URL = `${localhost}`;

const jwt = localStorage.getItem("jwt");
export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
