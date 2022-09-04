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
export type GetArticlesParams = {
  tag?: string;
  author?: string;
  favorited?: string;
  limit?: number; // default 20
  offset?: number; // default 0
};

export const convert = (props: Record<string, string | number | undefined>) => {
  return Object.fromEntries(
    Object.entries(props)
      .filter(([_, val]) => val !== undefined)
      .map(([key, val]) => [key, val as string | number])
  );
};
export const getArticlesService = async (props: GetArticlesParams) => {
  const params = convert(props);
  try {
    return await apiClient({
      method: "GET",
      url: "/articles",
      params,
    }).then(({ data }: AxiosResponse<GetArticlesResponse>) => data.articles);
  } catch (e) {
    if (e instanceof AxiosError) {
      throw new Error("failed on getting global articles");
    }
  }
};
