import axios from "axios";
import { baseUrl } from "./baseUrl";

const Axios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
    // Add any other custom headers you
  },
});

export default Axios;
