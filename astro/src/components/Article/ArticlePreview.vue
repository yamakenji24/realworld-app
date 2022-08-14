<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
      <div class="info">
        <a href="" class="author">{{ articles[0].author.username }}</a>

        <span class="date">{{ date }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i>
        {{ favCounts }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>

<script>
import { getGlobalArticles, globalArticles } from "../../store/articleStore";
import { useStore } from "@nanostores/vue";

export default {
  created() {
    getGlobalArticles();
  },
  setup() {
    const articles = useStore(globalArticles);
    return { articles };
  },
  props: ["author", "date", "favCounts", "title", "description"],
};
</script>
