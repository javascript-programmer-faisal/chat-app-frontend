import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-q450.onrender.com/api",
  withCredentials: true,
});
