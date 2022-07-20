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
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
    >
      <a-menu-item @click="navTo('/home')">
        <Icon
          :icon="'HomeOutlined'"
        />
        <span class="p-l">首页</span>
      </a-menu-item>
      <a-sub-menu
        v-for="(item, index) in routes"
        :key="`sub_${index}`"
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
          v-for="(it, ind) in item.children"
        >
          <a-menu-item
            v-if="!it.children?.length"
            :key="`item_${index}_${ind}`"
            @click="navTo(item.path)"
          >
            <span :class="item.meta.icon ? '' : 'p-l'">{{ it.meta.title }}</span>
          </a-menu-item>
          <a-sub-menu
            v-else
            :key="`sub_${index}_${ind}`"
          >
            <template #title>
              {{ it.meta.title }}
            </template>
            <a-menu-item
              v-for="(it2, ind2) in it.children"
              :key="`item_${index}_${ind}_${ind2}`"
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
import { useRouter } from 'vue-router';
</script>

<script setup lang="ts">
import { useRoutesStore } from '@/store/modules/routes';

const routesStore = useRoutesStore();
const { routes } = routesStore;
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const router = useRouter();
function navTo(path: string) {
  const prefix = '/layout/';
  router.push(`${path}`);
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
