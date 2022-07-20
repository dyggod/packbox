<template>
  <a-layout-sider
    id="components-layout-demo-side"
    v-model:collapsed="collapsed"
    collapsible
    width="256"
  >
    <div class="logo">
      <router-link to="/home">
        <img
          src="@/assets/images/logo.png"
          alt=""
        >
        <h1>{{ $t('menu.systemName') }}</h1>
      </router-link>
    </div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item
        :key="homePath"
        @click="navTo('/home')"
      >
        <Icon
          :icon="'HomeOutlined'"
        />
        <span class="p-l">首页</span>
      </a-menu-item>
      <a-sub-menu
        v-for="(item) in routes"
        :key="item.path"
      >
        <template #icon>
          <Icon
            v-if="item.meta.icon"
            :icon="item.meta.icon"
          />
        </template>
        <template #title>
          {{ item.meta.title }}
        </template>
        <template
          v-for="(it) in item.children"
        >
          <a-menu-item
            v-if="!it.children?.length"
            :key="it.path"
            @click="navTo(item.path)"
          >
            <span :class="item.meta.icon ? '' : 'p-l'">{{ it.meta.title }}</span>
          </a-menu-item>
          <a-sub-menu
            v-else
            :key="String(it.path)"
          >
            <template #title>
              {{ it.meta.title }}
            </template>
            <a-menu-item
              v-for="(it2) in it.children"
              :key="it2.path"
              @click="navTo(it2.path)"
            >
              <span :class="it2.meta.icon ? '' : 'p-l'">{{ it2.meta.title }}</span>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import Icon from '@/components/Icon';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
</script>

<script setup lang="ts">
import { useRoutesStore } from '@/store/modules/routes';
import { homePath } from '@/router/routes';

type MenuKeys = string[];

const routesStore = useRoutesStore();
const { routes } = routesStore;
const collapsed = ref<boolean>(false);

const router = useRouter();
function navTo(path: string) {
  const prefix = '/layout/';
  router.push(`${path}`);
}

function getNowKeys() {
  const route = useRoute();
  const { matched } = route;
  const openKeys: MenuKeys = [];
  const selectedKeys: MenuKeys = [];
  if (matched.length > 0) {
    matched.forEach((item, index) => {
      if (index === matched.length - 1) {
        selectedKeys.push(item.path);
      } else {
        openKeys.push(item.path);
      }
    });
  }
  return {
    openKeys,
    selectedKeys,
  };
}
const openKeys = ref<string[]>(getNowKeys().openKeys);
const selectedKeys = ref<string[]>(getNowKeys().selectedKeys);
</script>

<style lang="less" scoped>
@import './index.less';
</style>
