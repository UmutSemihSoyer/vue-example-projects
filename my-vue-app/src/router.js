import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    name: 'HomePage',
    path: '/dashboard',
    component: () => import('../src/views/HomePage.vue'),
  },
  {
    name: 'RegisterPage',
    path: '/register',
    component: () => import('../src/views/RegisterPage.vue'),
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: () => import('../src/views/LoginPage.vue'),
  }, 
  {
    name: 'NewDecision',
    path: '/new',
    component: () => import('../src/views/NewDecision.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
