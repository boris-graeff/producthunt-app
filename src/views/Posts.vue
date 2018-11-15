<template>
  <div class="posts">
    <header>
      <h1>ProductHunt</h1>
      <h2>The best new product, every day</h2>

      <date-select :value='date || $options.today' @change="onDateChange"/>

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
import { format } from 'date-fns'
import { mapActions, mapState } from 'vuex'
import PostPreview from './posts/PostPreview'
import ActivityOverview from './posts/ActivityOverview'
import DateSelect from './posts/DateSelect'

const today = format(new Date(), 'YYYY-MM-DD')

export default {
  today,
  props: ['date'],
  async mounted () {
    this.fetchPosts(this.date || today)
  },
  computed: {
    ...mapState('posts', {
      posts: ({ posts }) => posts
    })
  },
  methods: {
    async fetchPosts (date) {
      try {
        await this.getPosts(date)
      } catch (e) {
        // Should display error message
      }
    },
    onDateChange (date) {
      this.$router.push({ name: 'posts', params: { date } })
      this.fetchPosts(date)
    },
    ...mapActions('posts', {
      getPosts: 'getPosts'
    })
  },
  components: {
    ActivityOverview,
    PostPreview,
    DateSelect
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
