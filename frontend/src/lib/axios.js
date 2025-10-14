import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "httlp://localhost:5001/api",
  withCredentials: true, // send cookies with the request
});
