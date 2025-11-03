import axios from "axios";

// Usando mi Apis Rest - Node y Firebase
const api = axios.create({
  baseURL: "https://apis-rest-node-ts-firebase.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
