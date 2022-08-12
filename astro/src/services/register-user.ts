import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

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
    await apiClient({
      method: "POST",
      url: "/users",
      data: {
        user: { ...props },
      },
    }).then(({ data }: AxiosResponse<RegisterUserResponse>) => {
      localStorage.setItem("tk", data.user.token);
    });
    window.location.href = "/";
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on registering");
    }
  }
};