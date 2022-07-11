<template>
  <div>
    <a-pagination
      v-model:current="current"
      :total="500"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const current = ref(1);

</script>

<style lang="less" scoped>

</style>
