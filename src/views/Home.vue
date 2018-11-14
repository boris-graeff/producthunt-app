<template>
  <div>
    <header>
      <h1>ProductHunt</h1>
      <h2>The best new product, every day</h2>
    </header>

    <ul>
      <li v-for="post in posts" :key="post.id">
          {{ post.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

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
</style>
