import { AppRouteRecordRaw } from '@/router/types';
import Layout from '@/layout/Layout.vue';
import SubLayout from '@/layout/SubLayout.vue';

const routeName = 'test';

const Test: AppRouteRecordRaw = {
  path: `/${routeName}`,
  name: 'Test',
  component: Layout,
  redirect: `/${routeName}/index`,
  meta: {
    title: 'Test pages',
    icon: 'FileOutlined',
  },
  children: [
    {
      path: `/${routeName}/index`,
      name: `${routeName}-index`,
      component: SubLayout,
      redirect: `/${routeName}/index/sub`,
      meta: {
        title: 'Test sub',
        icon: 'PieChartOutlined',
      },
      children: [
        {
          path: `/${routeName}/index/sub`,
          name: `${routeName}-index-sub`,
          component: () => import('@/pages/test/Test.vue'),
          meta: {
            title: 'Test sub sub',
            icon: '',
          },
        },
      ],
    },
  ],
};

export default Test;
