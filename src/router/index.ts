import { createRouter, createWebHistory, RouterOptions } from 'vue-router';

import Login from '../pages/login/index.vue';
import CssDemo from '../pages/cssDemo/index.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/css',
    name: 'css',
    component: CssDemo,
  },
];

const routeOpt = <RouterOptions>{
  history: createWebHistory('/'),
  routes,
};

const router = createRouter(routeOpt);

router.beforeEach((to, from, next) => {
  next();
});

export default router;
