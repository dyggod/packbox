import { AppRouteRecordRaw } from '@/router/types';
import Layout from '@/layout/Layout.vue';

const routeName = 'css';

const CssDemo: AppRouteRecordRaw = {
  path: `/${routeName}`,
  name: `${routeName}`,
  component: Layout,
  redirect: `/${routeName}/index`,
  children: [
    {
      path: `/${routeName}/index`,
      name: `${routeName}-index`,
      component: () => import('@/pages/cssDemo/index.vue'),
      meta: {},
    },
  ],
  meta: {
    title: 'Css pages',
    icon: 'PieChartOutlined',
  },
};

export default CssDemo;
