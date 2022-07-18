import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  easing: 'ease',
  speed: 1000,
  trickleSpeed: 200,
  minimum: 0.1,
});

export function start() {
  NProgress.start();
}

export function close() {
  NProgress.done();
}
