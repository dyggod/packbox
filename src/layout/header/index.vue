<template>
  <a-layout-header
    style="background: #fff; padding: 0"
    class="layout-header"
  >
    <!-- 国际化选项 -->
    <div>
      <a-dropdown class="lang header-item">
        <div>
          <Icon icon="GlobalOutlined" /> {{ language }}
        </div>
        <template #overlay>
          <a-menu
            :selected-keys="[language]"
          >
            <a-menu-item
              v-for=" (lang) in localeOptions"
              :key="lang.value"
              @click="clickLanguage(lang.value)"
            >
              {{ lang.value.toLowerCase() + ' ' + lang.label }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>
<script lang="ts">
import Icon from '@/components/Icon';
import { storeToRefs } from 'pinia';
</script>

<script setup lang='ts'>
import { useSettingStore } from '@/store/modules/setting';
import { localeOptions } from '@/locales';

const settingStore = useSettingStore();

const { language } = storeToRefs(settingStore);

function clickLanguage(language: string) {
  settingStore.setLanguage(language);
}
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  padding: 0 24px !important;
  justify-content: right;
}
</style>
