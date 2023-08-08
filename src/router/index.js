import { createRouter, createWebHistory } from 'vue-router'
import DemoView from '../views/DemoView.vue'
import Homepage from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage,
      children: [
        {
          path: 'basedata',
          component: ()=>import('../views/baseData.vue')
        },
        {
          path: 'varifyName',
          component: ()=>import('../views/varifyName.vue')
        }
      ]
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('../views/Tabs.vue')
    },
    {
      path: '/element-plus-demo',
      name: 'element-plus-demo',
      component: () => import('../views/ElementPlusDemo.vue')
    },
    {
      path: '/element-plus-demo-form',
      name: 'element-plus-demo-form',
      component: () => import('../views/ElementPlusDemoForm.vue')
    },
  ]
})

export default router
