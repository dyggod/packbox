<template>
  <a-layout style="min-height: 100vh">
    <Menu />
    <a-layout class="layout-right">
      <Header />
      <a-layout-content
        style="margin: 0 16px"
        class="router-content-container beauty-scroll"
      >
        <Main />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        {{ $t('app.footer.copyright') }}
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Header from './header';

</script>

<style lang="less" scoped>
@import './index.less';
</style>
