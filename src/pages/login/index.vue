<template>
  <div>
    <a-button @click="clickLogin">
      登录
    </a-button>
  </div>
</template>

<script lang='ts' setup>
import {
  reactive, toRefs, onBeforeMount, onMounted,
} from 'vue';
import { loginService } from '@/api';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

async function clickLogin() {
  const data = await loginService.login('admin', 'admin');
  userStore.login(data.token, router);
}
</script>
<style lang='scss' scoped>
</style>
