import { defineStore } from 'pinia';
import { Router } from 'vue-router';
import { setToken, removeToken, getToken } from '@/utils/localstorage';
import { store } from '..';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginStatus: !!getToken(),
    user: {},
  }),
  getters: {},
  actions: {
    login(token: string, router?: Router) {
      setToken(token);
      this.loginStatus = true;
      router?.push('/');
    },
    logout(router?: Router) {
      removeToken();
      this.loginStatus = false;
      router?.push('/login');
    },
  },
});

export function useRoutesStoreWithOut() {
  return useUserStore(store);
}
