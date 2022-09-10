import axios, { AxiosRequestHeaders, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.realworld.io/api";

type Props<T, K> = {
  method: "POST" | "GET" | "PUT";
  url: string;
  data?: T;
  headers?: AxiosRequestHeaders;
  params?: K
};
export const apiClient = <T, K>({ method, url, data, headers, params }: Props<T, K>) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers: headers,
    data,
    params
  });
};
