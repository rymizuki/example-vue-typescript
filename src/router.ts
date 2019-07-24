import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = () => import('./pages/index.vue')

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})
