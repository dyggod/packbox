<template>
  <a-layout style="min-height: 100vh">
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
          <span :class="item.meta.icon ? '':'p-l'">{{ item.meta.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content
        style="margin: 0 16px"
        class="router-content-container"
      >
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import Icon from '@/components/Icon';
import { ref } from 'vue';
</script>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useRoutesStore } from '@/store/modules/routes';

const router = useRouter();
const store = useRoutesStore();
const { routes } = store;

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

function navTo(path: string) {
  const prefix = '/layout/';
  router.push(`${prefix}${path}`);
}

</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.p-l {
  padding-left: 24px;
}
</style>
