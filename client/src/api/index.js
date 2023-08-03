import axios from "axios";
// import jwtDecode from "jwt-decode";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const checkTokenExpiration = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }

  // Decode the token to get the expiration date
  const decodedToken = JSON.parse(atob(token.split(".")[1]));
  const expirationDate = new Date(decodedToken.exp * 1000); // Convert to milliseconds

  // Check if the token has expired
  if (expirationDate < new Date()) {
    // Clear the expired token
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
};

export const loginAPI = (user) => API.post("/auth/login", user);
export const logoutAPI = () => API.post("/auth/logout");

const authenticatedAPI = API;

authenticatedAPI.interceptors.request.use(
  async (config) => {
    checkTokenExpiration();
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authenticatedAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      alert("Session expired. Please login again.");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const fileUploadAPI = (file) =>
  authenticatedAPI.post("/file/parse-file", file, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
