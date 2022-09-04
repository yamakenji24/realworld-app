import { map, action } from "nanostores";
import { getArticlesService } from "../services/get-article";
import type { GetArticlesParams } from "../services/get-article";

export interface Article {
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
}

export const postedArticles = map<Article[]>();

export const getGlobalArticles = action(
  postedArticles,
  "getGlobalArticles",
  async (store) => {
    const articles = await getArticlesService({});
    if (articles) {
      store.set(articles);
    }
  }
);

export const getArticlesWithRequirements = action(
  postedArticles,
  "getArticlesWithRequirements",
  async (store, requirementes: GetArticlesParams) => {
    const articles = await getArticlesService({ ...requirementes });
    if (articles) {
      store.set(articles);
    }
  }
);
