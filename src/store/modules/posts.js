import { uniqBy } from 'lodash';
import { getPosts } from '@/api/producthunt'

const SET_POSTS = 'SET_POSTS'

export default {
  namespaced: true,
  state: {
    posts: []
  },

  mutations: {
    [SET_POSTS] (state, posts) {
      state.posts = posts
    }
  },

  actions: {
    async getPosts ({ commit }, date) {
      const response = await getPosts(date)
      commit(SET_POSTS, response.data.posts)
    }
  },

  getters: {
    nbOfPosts: ({ posts }) => posts.length,

    nbOfVotes: ({ posts }) => posts.reduce((res, post) => post.votes_count + res, 0),

    nbOfComments: ({ posts }) => posts.reduce((res, post) => post.comments_count + res, 0),

    nbOfMakers: ({ posts }) => {
      const makers = posts.reduce((res, post) => [...res, ...post.makers], [])
      return uniqBy(makers, 'id').length
    }
  }

}
