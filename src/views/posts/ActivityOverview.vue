<template>
  <ul>
    <li>
      <div>{{ nbOfPosts }}</div>
      <div>posts</div>
    </li>
    <li>
      <div>{{ nbOfVotes }}</div>
      <div>votes</div>
    </li>
    <li>
      <div>{{ nbOfComments }}</div>
      <div>comments</div>
    </li>
    <li>
      <div>{{ nbOfMakers }}</div>
      <div>makers</div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('posts', {
      nbOfPosts: 'nbOfPosts',
      nbOfVotes: 'nbOfVotes',
      nbOfComments: 'nbOfComments',
      nbOfMakers: 'nbOfMakers'
    })
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    padding: $space;

    > div:first-child {
      color: $primary-color;
      font-weight: 600;
    }
  }
</style>
