import { AppRouteRecordRaw } from '@/router/types';

const Test: AppRouteRecordRaw = {
  path: 'test',
  name: 'Test',
  component: () => import('@/pages/test/Test.vue'),
  meta: {
    title: 'Test pages',
    icon: 'FileOutlined',
  },
};

export default Test;
