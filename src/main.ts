import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import { setupRouter } from './router';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

function bootstrap() {
  const app = createApp(App);

  // 配置路由
  setupRouter(app);

  // 配置antd
  app.use(Antd);

  // 挂载
  app.mount('#app');
}

bootstrap();
