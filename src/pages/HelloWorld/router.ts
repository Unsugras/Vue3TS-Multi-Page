
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      title:'HelloWorld',
    },
    component: () => import('./Home.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
