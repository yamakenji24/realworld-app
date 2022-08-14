<template>
  <div v-if="articles.length">
    <ArticlePreview
      v-for="article in articles"
      v-bind:key="article.slug"
      :author="article.author.username"
      :date="article.createdAt"
      :favCounts="article.favoritesCount"
      :title="article.title"
      :description="article.description"
    />
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview.vue';

import { getGlobalArticles, globalArticles } from "../../store/articleStore";
import { useStore } from "@nanostores/vue";

export default {
  components: {
    ArticlePreview,
  },
  created() {
    getGlobalArticles();
  },
  setup() {
    const articles = useStore(globalArticles);
    return { articles };
  },
};
</script>
