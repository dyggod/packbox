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
import { message } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
</script>

<script setup lang="ts">
import { watch, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingStore } from '@/store/modules/setting';
import { useUserStore } from '@/store/modules/user';

const router = useRouter();

const { t } = useI18n();

dayjs.locale('zh-cn');

const { language } = storeToRefs(useSettingStore());
const userStore = useUserStore();
const i18n = useI18n();

// 监听语言变化
const locale = ref(zhCN.locale);
watch(language, () => {
  i18n.locale.value = language.value || 'zh-CN';
  if (language.value === 'en-US') {
    locale.value = enUS.locale;
  } else {
    locale.value = zhCN.locale;
  }
});
watch(locale, (val) => {
  dayjs.locale(val);
});

// 监听store中登录状态变化
const isLogin = computed(() => userStore.loginStatus);
watch(isLogin, (val) => {
  if (!val) {
    message.warning(t('app.logout.msg'));
    setTimeout(() => {
      router.push('/login');
    }, 1000);
  }
  if (val) {
    message.success(t('app.login.success'));
    router.push('/');
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
