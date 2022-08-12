import { apiRequest } from '~/services/api';

type RegisterUserService<T> = {
  path: string;
  method: 'POST' | 'GET';
  data: T;
};
export const registerUserService = async <T>({ path, method, data }: RegisterUserService<T>) => {
  await apiRequest({ path, method, data })
    .then((v) => v)
    .catch((e) => {
      if (e instanceof Error) {
        throw new Error('failed on user registration');
      }
    });
};
