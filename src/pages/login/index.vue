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

const clickLogin = async () => {
  const { data } = await loginService.login('admin', 'admin');
  console.log(data);
};
</script>
<style lang='scss' scoped>
</style>
