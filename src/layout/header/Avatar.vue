<template>
  <a-dropdown>
    <div
      class="pointer"
    >
      <a-avatar size="small">
        <template #icon>
          <Icon icon="UserOutlined" />
        </template>
      </a-avatar>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item @click="clickLogout">
          <template #icon>
            <Icon icon="PoweroffOutlined" />
          </template>
          <a href="javascript:;">{{ $t('app.logout.submit') }}</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
</script>

<script setup lang='ts'>
import Icon from '@/components/Icon';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
function clickLogout() {
  userStore.logout();
}

</script>

<style>

</style>
