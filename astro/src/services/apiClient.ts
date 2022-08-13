import axios, { AxiosRequestHeaders } from "axios";

const BASE_URL = "https://api.realworld.io/api";

type Props<T> = {
  method: "POST" | "GET";
  url: string;
  data?: T;
  headers?: AxiosRequestHeaders;
};
export const apiClient = <T>({ method, url, data, headers }: Props<T>) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers: headers,
    data,
  });
};
