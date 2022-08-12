import axios, { AxiosError, AxiosResponse } from "axios";

const BASE_URL = "https://api.realworld.io/api";

type Props = {
  username: string;
  email: string;
  password: string;
};

type RegisterUserResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};
export const registerUserService = async (props: Props) => {
  try {
    await axios(BASE_URL + "/users", {
      method: "POST",
      data: {
        user: { ...props },
      },
    }).then(({ data }: AxiosResponse<RegisterUserResponse>) => {
      localStorage.setItem('tk', data.user.token)
    });
    window.location.href = "/";
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error('failed on registering');
    }
  }
};
