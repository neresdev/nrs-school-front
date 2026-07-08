import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});
api.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost:5173';
api.defaults.headers.get['Content-Type'] = 'application/json';
export default api;