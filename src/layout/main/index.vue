<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="`animate__animated animate__lightSpeedInLeft page-toggle-enter-active`"
      :leave-active-class="`animate__animated animate__lightSpeedOutRight
      page-toggle-leave-active`"
    >
      <component
        :is="Component"
        :key="route.fullPath"
      />
    </transition>
  </router-view>
</template>

<script setup lang='ts'>

</script>

<style lang="less" scoped>
.page-toggle-enter-active{
  position: absolute !important;
  animation-duration: 0.6s !important;
  width: calc(100%) !important;
}
.page-toggle-leave-active{
  position: absolute !important;
  animation-duration: 0.2s !important;
  width: calc(100%) !important;
}
  </style>
