<template>
  <div>
    <div class="box" />
    <div class="box2" />
    <div>
      <ShadowBoxVue />
    </div>
  </div>
</template>

<script lang='ts' setup>
import {
  reactive, toRefs, onBeforeMount, onMounted,
} from 'vue';
import ShadowBoxVue from '@/components/ShadowBox.vue';

</script>
<style lang='scss' scoped>
.box {
  width: 100px;
  height: 100px;
  background-image: repeating-linear-gradient(-45deg, white -2px, red 1px, white 2px);
}

.box2 {
  width: 20px;
  height: 20px;
  background-color: blue;
  margin-top: 20px;
}
</style>
