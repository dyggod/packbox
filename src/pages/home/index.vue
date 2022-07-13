<template>
  <Container>
    <a-pagination
      v-model:current="current"
      :total="500"
    />
    <a-button @click="clickSpin">
      spin
    </a-button>
  </Container>
</template>

<script setup lang='ts'>
import { getCurrentInstance, ComponentInternalInstance, ref } from 'vue';
import Container from '@/components/container';

const instance = getCurrentInstance() as ComponentInternalInstance;

const { proxy } = instance;

function clickSpin() {
  proxy?.$spin.show({
    duration: 2000,
  });
}

const current = ref(1);

</script>

<style lang="less" scoped>

</style>
