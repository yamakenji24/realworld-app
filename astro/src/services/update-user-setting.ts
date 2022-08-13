import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type Props = {
  email?: string;
  username?: string;
  bio?: string;
  image?: string;
  token: string;
};

export const updateUserSetting = async (props: Props) => {
  try {
    await apiClient({
      method: "PUT",
      url: "/user",
      headers: {
        Authorization: `Token ${props.token}`,
      },
      data: {
        user: { ...props },
      },
    });
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on updateing user setting");
    }
  }
};
