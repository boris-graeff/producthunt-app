<template>
  <a :href="post.redirect_url" target="_blank" class="post">
    <div class="thumbnail" :style="{backgroundImage: 'url(' + post.thumbnail.image_url + ')'}"></div>
    <div class="content">
      <div class="name">{{ post.name }}</div>
      <div class="upvotes">{{ post.votes_count }} upvotes</div>
      <div class="description">{{ post.tagline }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .post {
    text-align: center;
    width: 100%;
    background: white;
    box-shadow: 0 0 3px 0 $secondary-color;

    &:hover {
      opacity: 0.8;
    }
  }

  .thumbnail {
    height: 180px;
    background-size: cover;
    background-position: center top;
  }

  .content {
    padding: 2 * $space;
  }

  .name {
    color: $primary-color;
    margin-bottom: $space;
    font-size: 20px;
    font-weight: 600;
  }

  .upvotes {
    color: $secondary-color;
    margin-bottom: $space;
    font-size: 12px;
  }
</style>
