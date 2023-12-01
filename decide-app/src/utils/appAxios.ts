
import axios, { AxiosInstance } from "axios";
export const appAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    tokenX: 'myToken',
    'Content-Type': 'application/json',
  },
});


