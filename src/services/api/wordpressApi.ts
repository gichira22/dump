// import { API_BASE_URL } from "@utils/constants";
// import axios, { AxiosResponse } from "axios";

// const api = axios.create({
//   baseURL: API_BASE_URL, 
// });

// const handleRequest = async <T>(request: Promise<AxiosResponse<T>>) => {
//   try {
//     const response = await request;
//     return Array.isArray(response.data) ? response.data : [response.data];
//   } catch (error) {
//     throw error;
//   }
// };

// export const get = <T>(url: string) => handleRequest<T>(api.get(url));
// export const post = <T>(url: string, data: any) =>
//   handleRequest<T>(api.post(url, data));
// export const put = <T>(url: string, data: any) =>
//   handleRequest<T>(api.put(url, data));
// export const del = <T>(url: string) => handleRequest<T>(api.delete(url));

import { API_BASE_URL } from "@utils/constants";
import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// FIXED: Proper typing for handleRequest
const handleRequest = async <T>(request: Promise<AxiosResponse<T>>): Promise<T> => {
  try {
    const response = await request;
    return response.data; // Return the data directly, not wrapped in array
  } catch (error) {
    throw error;
  }
};

export const get = <T>(url: string) => handleRequest<T>(api.get<T>(url));
export const post = <T>(url: string, data: any) =>
  handleRequest<T>(api.post<T>(url, data));
export const put = <T>(url: string, data: any) =>
  handleRequest<T>(api.put<T>(url, data));
export const del = <T>(url: string) => handleRequest<T>(api.delete<T>(url));