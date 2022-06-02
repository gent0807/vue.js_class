import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../views/ToDo.vue'
import GridSystem from '../views/GridSystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: ToDo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/gridsystem',
    name: 'GridSystem',
    component: GridSystem
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
