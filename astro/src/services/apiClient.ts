import axios from "axios";

const BASE_URL = "https://api.realworld.io/api";

type Props<T> = {
  method: "POST" | "GET";
  url: string;
  data: T;
};
export const apiClient = <T>({ method, url, data }: Props<T>) => {
  return axios({
    method,
    url: BASE_URL + url,
    data,
  });
};
