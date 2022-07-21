import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import zh from './lang/zh-CH';
import en from './lang/en-US';

export const localeOptions: StrOptions[] = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];

export const LOCALES = {
  zh: localeOptions[0],
  en: localeOptions[1],
};

/**
 * 创建 i18n 配置
 * @param locale 本地化语言
 * @param fallback 回退语言
 * @returns {VueI18n}
 */
function initI18n(app: App) {
  const i18nOptions = {
    locale: LOCALES.zh.value,
    fallbackLocale: LOCALES.en.value,
    silentTranslationWarn: true,
    messages: {
      [LOCALES.en.value]: en,
      [LOCALES.zh.value]: zh,
    },
  };
  const i18n = createI18n(i18nOptions);
  app.use(i18n);
}

export {
  initI18n,
};
