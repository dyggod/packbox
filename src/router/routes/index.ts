import type { AppRouteRecordRaw } from '@/router/types';
import asyncRoutes from './mount';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    title: 'Login pages',
  },
};

export const Layout: AppRouteRecordRaw = {
  path: '/home',
  name: 'Home',
  component: () => import('@/layout/Layout.vue'),
  children: [
    {
      path: '/home/index',
      name: 'HomeIndex',
      component: () => import('@/pages/home/index.vue'),
      meta: {},
    },
  ],
  meta: {
    title: 'Layout pages',
  },
};

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  Layout,
  ...asyncRoutes,
];
