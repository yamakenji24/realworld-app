import axios, { AxiosRequestHeaders, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.realworld.io/api";

type Props<T> = {
  method: "POST" | "GET" | "PUT";
  url: string;
  data?: T;
  headers?: AxiosRequestHeaders;
  params?: AxiosRequestConfig
};
export const apiClient = <T>({ method, url, data, headers, params }: Props<T>) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers: headers,
    data,
    params
  });
};
