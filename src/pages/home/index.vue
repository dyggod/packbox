<template>
  <Container>
    <a-pagination
      v-model:current="current"
      :total="500"
    />
  </Container>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Container from '@/components/container';

const current = ref(1);

</script>

<style lang="less" scoped>

</style>
