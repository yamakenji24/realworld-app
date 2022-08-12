import axios from 'axios';

const APIURL = 'https://api.realworld.io/api';

type ApiRequest<T> = {
  path: string;
  method: 'POST' | 'GET';
  data: T;
};
// eslint-disable-next-line arrow-body-style
export const apiRequest = <T>({ path, method, data }: ApiRequest<T>) => {
  return axios(APIURL + path, {
    method: method as string,
    headers: { 'Content-Type': 'application/json' },
    data: {
      ...data,
    },
  });
};
