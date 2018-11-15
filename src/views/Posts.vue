<template>
  <div class="posts">
    <header>
      <h1>ProductHunt</h1>
      <h2>The best new product, every day</h2>
      <activity-overview />
    </header>

    <ul class="grids">
      <li v-for="post in posts" :key="post.id">
        <post-preview :post="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostPreview from './posts/PostPreview'
import ActivityOverview from './posts/ActivityOverview'

export default {
  async mounted () {
    try {
      await this.getPosts()
    } catch (e) {
      // Should display error message
    }
  },
  computed: {
    ...mapState('posts', {
      posts: ({ posts }) => posts
    })
  },
  methods: {
    ...mapActions('posts', {
      getPosts: 'getPosts'
    })
  },
  components: {
    ActivityOverview,
    PostPreview
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .posts {
    padding: 6 * $space 0;
  }

  h1 {
    font-size: 40px;
    color: $primary-color;
  }

  h2 {
    font-size: 20px;
    color: $secondary-color;
  }

  header {
    text-align: center;
  }

  .grids {
    display: flex;
    flex-wrap: wrap;
    padding : 0 $space;

    > li {
      width: 33%;
      padding: $space;
      display: flex;
    }
  }
</style>
