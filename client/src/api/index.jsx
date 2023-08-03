import axios from "axios";
import jwt from "jsonwebtoken";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const checkTokenExpiration = () => {
  const token = localStorage.get("token");
  if (!token) {
    return;
  }

  // Decode the token to get the expiration date
  const decodedToken = jwt.decode(token);
  const expirationDate = new Date(decodedToken.exp * 1000); // Convert to milliseconds

  // Check if the token has expired
  if (expirationDate < new Date()) {
    // Clear the expired token
    localStorage.remove("token");
    localStorage.remove("user");
  }
};

export const loginAPI = (user) => API.post("/auth/login", user);
export const logoutAPI = () => API.post("/auth/logout");

API.interceptors.request.use(
  async (config) => {
    checkTokenExpiration();
    const token = localStorage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.remove("token");
      localStorage.remove("user");
    }
    return Promise.reject(error);
  }
);
