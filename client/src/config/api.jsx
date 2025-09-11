// client/src/config/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:4500",
  // withCredentials: true // uncomment only if you use cookie-based auth (server sets cookies)
});

export default api;
