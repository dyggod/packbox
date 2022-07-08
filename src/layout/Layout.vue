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
        PackBox ©2022 Created by dyggod
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
@header-height: 64px;
@pd-left-16: 16px;
@sider-width: 256px;

.layout-right {
  height: 100vh;
}

.router-content-container {
  padding-left: @pd-left-16;
  padding-right: @pd-left-16;
  max-height: calc(100vh - @header-height);
  overflow-y: auto;
}
</style>
