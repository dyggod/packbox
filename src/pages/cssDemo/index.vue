<template>
  <Container>
    <div>
      <div class="box" />
      <div class="box2" />
      <div>
        <ShadowBoxVue />
      </div>
      <div>
        <PrismCode
          :value="'.mb-4 { margin-bottom: 1rem;}'"
          language="less"
        />
      </div>
    </div>
  </Container>
</template>

<script lang='ts' setup>
import ShadowBoxVue from '@/components/ShadowBox.vue';
import Container from '@/components/container/index.vue';
import PrismCode from '@/components/prism';

</script>
<style lang='less' scoped>
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
