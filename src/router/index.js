import Vue from 'vue'
import VueRouter from 'vue-router'
import todo from './todo'

Vue.use(VueRouter)

const routes = {
  mode: 'history',
  routes: [
    ...todo,
  ]
}

  let router = new VueRouter(routes)

  // router.beforeEach((to, from, next) => {
  //   next()
  // })

export default router