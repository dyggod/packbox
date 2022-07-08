<template>
  <div
    class="shadow-box"
    :style="boxStyle"
  >
    <div
      v-for="item in shadowBoxCount"
      :key="item"
      class="inner-box"
      :style="genInnerBoxStyle(item)"
    />
  </div>
</template>

<script lang="ts">
import {
  reactive, toRefs, onBeforeMount, onMounted,
} from 'vue';

const ShadowBoxProps = {
  width: { type: Number, default: 50 },
  height: { type: Number, default: 50 },
  color: { type: String, default: '#c4f0df' },
};

const gap = 4;
</script>

<script lang='ts' setup>

const props = defineProps(ShadowBoxProps);

const shadowBoxCount = (props.width / gap) * 2;

const boxStyle = {
  width: `${props.width}px`,
  height: `${props.height}px`,
};

function genInnerBoxStyle(ind: number) {
  const innerBoxStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    background: `linear-gradient(135deg, transparent 49.9%, ${props.color} 49.9%, deeppink 50.1%, transparent 50.1%)`,
    left: `${-props.width + (gap * ind)}px`,
  };
  return innerBoxStyle;
}

</script>
<style lang='less' scoped>
.shadow-box {
  position: relative;
  overflow: hidden;
}

.inner-box {
  position: absolute;
}
</style>
