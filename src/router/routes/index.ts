import type { AppRouteRecordRaw } from '@/router/types';
import asyncRoutes from './mount';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/layout',
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
  path: '/layout',
  name: 'Layout',
  redirect: '/layout/css',
  component: () => import('@/layout/Layout.vue'),
  children: asyncRoutes,
  meta: {
    title: 'Layout pages',
  },
};

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  Layout,
];
