<template>
  <div class="login-page">
    <div class="page-content">
      <div class="left">
        <span>{{ $t('app.login.welcome') }}</span>
        <div class="inner" />
      </div>
      <div class="right">
        <div class="title">
          {{ $t('app.login.submit') }}
        </div>
        <a-card
          class="login-card"
          :bordered="false"
        >
          <a-form
            ref="formRef"
            :model="formState"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 24 }"
            :rules="rules"
            @finish="clickLogin"
          >
            <a-space
              direction="vertical"
              size="large"
              style="width: 100%"
            >
              <div>
                <a-form-item name="username">
                  <a-input
                    v-model:value="formState.username"
                    placeholder="请输入用户名"
                  />
                </a-form-item>
                <a-form-item name="password">
                  <a-input-password
                    v-model:value="formState.password"
                    placeholder="请输入密码"
                  />
                </a-form-item>
              </div>
              <a-form-item>
                <a-button
                  type="primary"
                  html-type="submit"
                  shape="round"
                  size="large"
                >
                  {{ $t('app.login.submit') }}
                </a-button>
              </a-form-item>
            </a-space>
          </a-form>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<script lang='ts' setup>
import {
  reactive, toRefs, onBeforeMount, onMounted,
} from 'vue';
import type { Rule } from 'ant-design-vue/es/form';

import { loginService } from '@/api';
import { useUserStore } from '@/store/modules/user';
import { useRouter } from 'vue-router';

interface FormState {
  username: string,
  password: string,
}

const userStore = useUserStore();
const router = useRouter();

const formState = reactive<FormState>({
  username: '',
  password: '',
});

const rules: Record<string | Rule[]> = {
  username: [
    { required: true, message: '请输入用户名' },
  ],
  password: [
    { required: true, message: '请输入密码' },
  ],
};

async function clickLogin() {
  const data = await loginService.login(formState.username, formState.password);
  userStore.login(data.token);
}
</script>
<style lang='less' scoped>
@import './index.less';
</style>
