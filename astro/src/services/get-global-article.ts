import { AxiosError, AxiosResponse } from "axios";
import { apiClient } from "./apiClient";

type GetArticlesResponse = {
  articles: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  }[];
};
type GetArticlesParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number; // default 20
  offset?: number; // default 0
};
export const getGlobalArticlesService = async (props: GetArticlesParams) => {
  try {
    return await apiClient({
      method: "GET",
      url: "/articles",
    }).then(({ data }: AxiosResponse<GetArticlesResponse>) => data.articles);
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on getting global articles");
    }
  }
};
