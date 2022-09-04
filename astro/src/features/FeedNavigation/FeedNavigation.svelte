<script>
  import { tag } from "../../store/tagStore";
  import { userInfo } from "../../store/userStore";
  import {
    getGlobalArticles,
    getArticlesWithRequirements,
  } from "../../store/articleStore";

  function handleChangeFeedNav(e) {
    const name = e.currentTarget.name;
    switch (name) {
      case "global": {
        getGlobalArticles();
        break;
      }
      case "mine": {
        getArticlesWithRequirements({ author: $userInfo.username });
        break;
      }
      default: {
        getArticlesWithRequirements({ tag: name });
        break;
      }
    }
  }
</script>

<div class="feed-toggle">
  <ul class="nav nav-pills outline-active">
    <li class="nav-item">
      <button on:click={handleChangeFeedNav} name="mine" class="nav-link">
        Your Feed
      </button>
    </li>
    <li class="nav-item">
      <button
        on:click={handleChangeFeedNav}
        name="global"
        class="nav-link"
      >
        Global Feed
      </button>
    </li>
    {#if $tag}
      <li class="nav-item">
        <button on:click={handleChangeFeedNav} name={$tag} class="nav-link">
          {$tag}
        </button>
      </li>
    {/if}
  </ul>
</div>
