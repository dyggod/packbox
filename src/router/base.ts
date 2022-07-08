import { AppRouteRecordRaw } from '@/router/types';

export const ErrorPageRoute: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: '404',
};
