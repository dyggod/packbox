<template>
  <div
    class="container"
    :style="containerStyle"
  >
    <div
      class="water-level"
      :style="waterLevelStyle"
    />
    <div class="water-value">
      {{ value }}%
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  width: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: '#1890ff',
  },
});

const value = ref(props.value);

const containerStyle = computed(() => ({
  width: `${props.width}px`,
  height: `${props.width}px`,
}));

const waterLevelStyle = computed(() => ({
  '--water-top': `${(-0.35) * props.width + (-0.42) * value.value + 40}px`,
  '--wave-width': `${props.width}px`,
  '--wave-height': `${props.width}px`,
  '--water-width': `${props.width * 2}px`,
  '--water-height': `${props.width * 2}px`,
  '--water-left': `${props.width / 2}px`,
}));
</script>

<style lang="less">
.container {
  position: relative;
  border: 2px solid rgb(118, 218, 255);
  border-radius: 50%;
  overflow: hidden;
}
.water-level {
  position: relative;
  width: var(--wave-width);
  height: var(--wave-height);
  background-color: rgb(118, 218, 255);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: var(--water-width);
    height: var(--water-height);
    top: var(--water-top);
    left: var(--water-left);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 6s linear infinite;
    z-index: 1;
  }

  &::after {
    border-radius: 47%;
    background-color: rgba(255, 255, 255, 0.9);
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 10s linear -5s infinite;
    z-index: 2;
  }
}

.water-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  z-index: 3;
}

p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #000;
  z-index: 10;
}

@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
</style>
