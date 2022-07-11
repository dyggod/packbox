<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="router-container">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
</script>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useSettingStore } from './store/modules/setting';

dayjs.locale('zh-cn');

const { language } = storeToRefs(useSettingStore());
const i18n = useI18n();

const locale = ref(zhCN.locale);

watch(locale, (val) => {
  dayjs.locale(val);
});

watch(language, () => {
  i18n.locale.value = language.value || 'zh-CN';
  if (language.value === 'en-US') {
    locale.value = enUS.locale;
  } else {
    locale.value = zhCN.locale;
  }
});

</script>

<style lang="less">
@import '@/style/index.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
