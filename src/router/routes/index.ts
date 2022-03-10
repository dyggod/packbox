import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login',
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

export const CssDemo: AppRouteRecordRaw = {
  path: '/css',
  name: 'Css',
  component: () => import('@/pages/cssDemo/index.vue'),
  meta: {
    title: 'Css pages',
  },
};

export const basicRoutes = [
  LoginRoute,
  RootRoute,
  CssDemo,
];
