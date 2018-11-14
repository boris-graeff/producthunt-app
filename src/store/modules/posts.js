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
    async getPosts ({ commit }) {
      const response = await getPosts()
      commit(SET_POSTS, response.data.posts)
    }
  }
}
