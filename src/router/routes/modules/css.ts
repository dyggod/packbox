import { AppRouteRecordRaw } from '@/router/types';
import Layout from '@/layout/Layout.vue';

const routeName = 'css';

const CssDemo: AppRouteRecordRaw = {
  path: `/${routeName}`,
  name: `${routeName}`,
  component: Layout,
  redirect: `/${routeName}/index`,
  meta: {
    title: 'CSS效果',
    icon: 'PieChartOutlined',
  },
  children: [
    {
      path: `/${routeName}/index`,
      name: `${routeName}-index`,
      component: () => import('@/pages/cssDemo/index.vue'),
      meta: {
        title: '对角线',
      },
    },
  ],
};

export default CssDemo;
