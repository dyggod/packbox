import { useUserStore } from '@/store/modules/user';

export function getLoginStatus() {
  return useUserStore().loginStatus;
}

export function loadMenu() {
  //
}
