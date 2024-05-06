import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound/NotFound.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },

  ]
})

export default router
