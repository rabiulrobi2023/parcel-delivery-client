import { envValirable } from "@/config/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: envValirable.baseUrlLocal, withCredentials:true
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function onFulfilled(response) {
    return response;
  },
  function onReject(error) {
    return Promise.reject(error);
  }
);
