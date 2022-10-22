import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.comfort4baby.store",
// });
const instance = axios.create({
  baseURL: "http://localhost:5000",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

export default instance;
