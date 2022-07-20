import type { AppRouteRecordRaw, LoginIgnore } from '@/router/types';
import asyncRoutes from './mount';

export const homePath = '/home/index';

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
  redirect: homePath,
  children: [
    {
      path: homePath,
      name: 'HomeIndex',
      component: () => import('@/pages/home/index.vue'),
      meta: {},
    },
  ],
  meta: {
    title: 'Layout pages',
  },
};

export const loginIgnore: LoginIgnore = {
  names: ['404'], // 根据路由名称匹配
  paths: ['/login', '*'], // 根据路由fullPath匹配
  /**
   * 判断路由是否包含在该配置中
   * @param route vue-router 的 route 对象
   * @returns {boolean}
   */
  includes(route): boolean {
    return this.paths.includes(route.path);
  },
};

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  Layout,
  ...asyncRoutes,
];
