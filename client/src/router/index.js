import { createRouter as CreateRouter, createWebHistory } from 'vue-router'

const router = new CreateRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('views/home/home.vue'),
    },
  ],
})

export default router
