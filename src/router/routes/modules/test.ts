import { AppRouteRecordRaw } from '@/router/types';
import Layout from '@/layout/Layout.vue';

const routeName = 'test';

const Test: AppRouteRecordRaw = {
  path: `/${routeName}`,
  name: 'Test',
  component: Layout,
  redirect: `/${routeName}/index`,
  children: [
    {
      path: `/${routeName}/index`,
      name: `${routeName}-index`,
      component: () => import('@/pages/test/Test.vue'),
      meta: {
        title: 'Test pages',
        icon: 'PieChartOutlined',
      },
    },
  ],
  meta: {
    title: 'Test pages',
    icon: 'FileOutlined',
  },
};

export default Test;
