import type { Router } from 'vue-router';
import { getLoginStatus } from './utils';
import { LoginRoute, loginIgnore } from './routes/index';

export default function setupRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (getLoginStatus() === false) {
      if (loginIgnore.includes(to)) {
        next();
      } else {
        next(LoginRoute.path);
      }
    } else if (to.path !== LoginRoute.path) {
      next();
    } else {
      next(from.path);
    }
  });

  router.onError((error) => {
    throw new Error(`路由错误：${error}`);
  });
}
