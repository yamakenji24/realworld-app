import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type GetUserInfoResponse = {
  user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  };
};

type Props = {
  token: string;
};
export const getUserInfoService = async ({
  token,
}: Props) => {
  try {
    return await apiClient({
      method: "GET",
      url: "/user",
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then(({ data }: AxiosResponse<GetUserInfoResponse>) => data.user);
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on getting error");
    }
  }
};
