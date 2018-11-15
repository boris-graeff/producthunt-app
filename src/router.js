import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts/:date?',
      name: 'posts',
      component: Posts,
      props: true
    },
    {
      path: '*',
      redirect: {
        name: 'posts',
        params: {}
      }
    }
  ]
})
