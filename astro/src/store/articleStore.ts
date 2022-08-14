import { map, action } from "nanostores";
import { getGlobalArticlesService } from "../services/get-global-article";

export interface GlobalArticle {
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

export const globalArticles = map<GlobalArticle[]>();

export const getGlobalArticles = action(
  globalArticles,
  "getGlobalArticles",
  async (store) => {
    const articles = await getGlobalArticlesService({});
    if (articles) {
      store.set(articles)
    }
  }
);
