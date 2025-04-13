import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api/v1",
});
api.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost:5173';
api.defaults.headers.get['Content-Type'] = 'application/json';
export default api;