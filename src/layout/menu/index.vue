<template>
  <a-layout-sider
    id="components-layout-demo-side"
    v-model:collapsed="collapsed"
    collapsible
  >
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item
        v-for="(item, index) in routes"
        :key="index"
        @click="navTo(item.path)"
      >
        <Icon
          v-if="item.meta.icon"
          :icon="item.meta.icon"
        />
        <span :class="item.meta.icon ? '' : 'p-l'">{{ item.meta.title }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import Icon from '@/components/Icon';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
</script>

<script setup lang="ts">
import { useRoutesStore } from '@/store/modules/routes';

const routesStore = useRoutesStore();
const { routes } = routesStore;
console.log('routes: ', routes);
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const router = useRouter();
function navTo(path: string) {
  const prefix = '/layout/';
  router.push(`${path}`);
}
</script>

<style lang="less" scoped>
@color: rgba(255, 255, 255, 0.3);

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: @color;
}
</style>
