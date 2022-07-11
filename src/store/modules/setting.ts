import { defineStore } from 'pinia';
import { store } from '..';

export const useSettingStore = defineStore({
  id: 'setting',
  state: () => ({
    language: 'zh-CN',
  }),
  getters: {},
  actions: {
    setLanguage(language: string) {
      this.language = language;
    },
  },
});

export function useRoutesStoreWithOut() {
  return useSettingStore(store);
}
