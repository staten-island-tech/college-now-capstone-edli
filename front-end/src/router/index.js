import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    
    {
      path: '/addshows',
      name: 'addshows',
      component: () => import('../views/AddShows.vue')
    },
    {
      path: '/mylist',
      name: 'mylist',
      component: () => import('../views/MylistView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue')
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
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
