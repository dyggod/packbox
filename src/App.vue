<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue';
import ShadowBox from './components/ShadowBox.vue';
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <ShadowBox
    :width="100"
    :height="50"
    color="red"
  />
  <ShadowBox
    :width="100"
    :height="50"
    color="blue"
  />
  <div class="box" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  margin-top: 50px;
  width: 100px;
  height: 100px;
  background-image: repeating-linear-gradient(-45deg, white -2px, red 1px, white 2px);
}
</style>
