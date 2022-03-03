import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "basic" */ '../components/basic/Button/index.vue')
  },
  {
    path: '/Table',
    name: 'table',
    component: () => import(/* webpackChunkName: "data" */ '../components/data/Table/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
