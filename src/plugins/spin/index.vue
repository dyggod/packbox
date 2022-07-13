<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div
      v-if="spinning"
      class="custom-spin"
    >
      <div class="spin-container">
        <Spin />
      </div>
    </div>
  </transition>
</template>

<script setup lang='ts'>
import { Spin } from 'ant-design-vue';
import {
  reactive, toRefs, onBeforeMount, onMounted, ref,
} from 'vue';
import { SpinOptions } from './types';

const spinning = ref<boolean>(false);
// 定义一个定时器类型
const timer = ref<null | NodeJS.Timeout>(null);
const tip = ref<string>('');

function start(options: SpinOptions) {
  if (options) {
    const { msg, duration } = options;
    tip.value = msg || '';
    if (duration && typeof duration === 'number') {
      if (timer.value === null) {
        timer.value = setTimeout(() => {
          spinning.value = false;
          timer.value = null;
        }, duration);
      }
    }
  }
  spinning.value = true;
}

function end() {
  spinning.value = false;
  if (timer.value !== null) {
    clearTimeout(timer.value);
    timer.value = null;
  }
  tip.value = '';
}

defineExpose({ start, end });
</script>

<script lang="ts">
export default {
  data() {
    return {
      spinning: false,
      tip: '',
    };
  },
  methods: {
    start() {
      console.log(4444);
    },
  },
};
</script>

<style lang="less" scoped>
.custom-spin {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);

  .spin-container {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
