import { AppRouteRecordRaw } from '@/router/types';
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';

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
