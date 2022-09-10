<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
      <div class="info">
        <a href="" class="author">{{ author }}</a>

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
export default {
  props: ["author", "date", "favCounts", "title", "description"],
};
</script>
