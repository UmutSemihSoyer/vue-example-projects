import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/recipe/:slug',
    name: 'Recipe',
    component: () => import('../views/Recipe.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
