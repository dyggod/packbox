import {
  render, createVNode, VNode, App,
} from 'vue';
import globalSpin from './index.vue';
import { SpinPlugin } from './types';

// Global Custom Properties
declare module 'vue' {
  interface ComponentCustomProperties {
    $spin: SpinPlugin;
  }
}

export default {
  install: (app: App) => {
    // 实例化并绑定组件
    const instance: VNode = createVNode(globalSpin);
    // const node = instance.mount(document.createElement('div'));

    // 2.将挂载的Node添加到body中
    render(instance, document.body);

    // 3.定义全局($toast即是此插件的名称)
    const $spin: SpinPlugin = {
      show(options) {
        instance?.component?.exposed?.start(options);
      },
      end() {
        instance?.component?.exposed?.end();
      },
    };
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$spin = $spin;
  },
};
