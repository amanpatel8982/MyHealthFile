// src/config/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4500", // ✅ tumhara backend server URL
});

export default api;
