import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type GetTagsResponse = {
  tags: string[];
};

export const getTagsService = async () => {
  try {
    return await apiClient({
      method: "GET",
      url: "/tags",
    }).then(({ data }: AxiosResponse<GetTagsResponse>) => data.tags);
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on getting global articles");
    }
  }
};
