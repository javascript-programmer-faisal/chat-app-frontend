import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-backend-q450.onrender.com/api" : "/api",
  withCredentials: true,
});
