import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";
import { updateUserInfo } from "../store/userStore";

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
      updateUserInfo(data.user);
    });
    window.location.href = "/";
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on login");
    }
  }
};
