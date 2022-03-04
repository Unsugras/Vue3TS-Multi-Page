import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/oldTemplate',
    name: 'oldTemplate',
    component: () => import('../views/oldTemplate.vue')
  },
  {
    path: '/oldTemplateSetup',
    name: 'oldTemplateSetup',
    component: () => import('../views/oldTemplateSetup.vue')
  },
  {
    path: '/newTemplate',
    name: 'newTemplate',
    component: () => import('../views/newTemplate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
