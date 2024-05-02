import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/ShowsView.vue')
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: () => import('../views/MylistView.vue')
    },
    {
      path: '/data:id',
      name: 'data',
      component: () => import('../views/ShowData.vue')
    },
    {
      path: '/allshow',
      name: 'allshow',
      component: () => import('../views/AllShow.vue')
    },
  ]
})

export default router
