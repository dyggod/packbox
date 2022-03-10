import { defineStore } from 'pinia';
import asyncRoutes from '@/router/routes/mount';
import type { AppRouteRecordRaw } from '@/router/types';
import { store } from '..';

interface RoutesState {
  layoutRoutes?: AppRouteRecordRaw[]
}

export const useRoutesStore = defineStore({
  id: 'routes',
  state: (): RoutesState => ({
    layoutRoutes: asyncRoutes,
  }),
  getters: {
    routes(): AppRouteRecordRaw[] {
      if (this.layoutRoutes !== undefined) {
        return this.layoutRoutes;
      }
      return [];
    },
  },
});

// Need to be used outside the setup
export function useRoutesStoreWithOut() {
  return useRoutesStore(store);
}
