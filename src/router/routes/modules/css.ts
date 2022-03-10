import { AppRouteRecordRaw } from '@/router/types';

const CssDemo: AppRouteRecordRaw = {
  path: 'css',
  name: 'Css',
  component: () => import('@/pages/cssDemo/index.vue'),
  meta: {
    title: 'Css pages',
    icon: 'PieChartOutlined',
  },
};

export default CssDemo;
