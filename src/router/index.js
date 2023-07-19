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
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/Tabs.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/element-plus-demo',
      name: 'element-plus-demo',
      component: () => import('../views/ElementPlusDemo.vue')
    },
    {
      path: '/element-plus-demo-form',
      name: 'element-plus-demo-form',
      component: () => import('../views/ElementPlusDemoForm.vue')
    }
  ]
})

export default router
