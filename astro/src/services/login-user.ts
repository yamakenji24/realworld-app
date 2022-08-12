import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type Props = {
  email: string;
  password: string;
};
type LoginUserResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

export const loginUserService = async (props: Props) => {
  try {
    await apiClient({
      method: "POST",
      url: "/users/login",
      data: {
        user: { ...props },
      },
    }).then(({ data }: AxiosResponse<LoginUserResponse>) => {
      localStorage.setItem("tk", data.user.token);
    });
    window.location.href = "/";
  } catch (e) {
    console.log(e)
    if (e instanceof AxiosError) {
      throw new Error("failed on login");
    }
  }
};
