import { request, HttpMethod, ResCode } from '@/utils/request';
import { UncertaintyStr } from '@/types/common';

const api: UncertaintyStr = {
  login: '/auth/login',
};

export async function login(username: string, password: string) {
  const res = await request(api.login, HttpMethod.POST, {
    username,
    password,
  });
  if (res.data.code === ResCode.SUCCESS) {
    return res.data;
  }
  return Promise.reject(res.data);
}

export async function logout() {
  //
}

export default {
  login,
  logout,
};
