<template>
  <div>
    <h1>ProductHunt</h1>
    <pre>
      {{ posts }}
    </pre>
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
