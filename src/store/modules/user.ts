import { defineStore } from 'pinia';
import { Router } from 'vue-router';
import { store } from '..';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginStatus: false,
    user: {},
  }),
  getters: {},
  actions: {
    login(token: string, router: Router) {
      this.loginStatus = true;
      router.push('/');
    },
  },
});

export function useRoutesStoreWithOut() {
  return useUserStore(store);
}
