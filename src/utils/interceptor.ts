import { ReqInterceptor, ResInterceptor } from '@/types/common';
import { ResCode, HttpStatus } from './request';

// 请求白名单
const whiteList = ['/login', '/register'];

// 请求拦截器
const reqCommon: ReqInterceptor = {
  /**
   * 发送请求之前的拦截器
   * @param config axios config
   * @param options 应用配置 包含: {router, store, message}
   * @returns {*}
   */
  onFulfilled(config, options) {
    const { url, headers } = config;
    if (url && !whiteList.includes(url)) {
      // TODO: header 中添加认证token
    }
    return config;
  },

  /**
     * 请求出错的拦截器
     * @param error 错误对象
     * @param options 应用配置 包含: {router, store, message}
     * @returns {Promise<never>}
     */
  onRejected(error: Error, options) {
    const { message } = options;
    message.error(error.message);
    return Promise.reject(error);
  },
};

const resCommon: ResInterceptor = {
  onFulfilled(response, options) {
    const { message } = options;
    if (response.status !== HttpStatus.OK) {
      message.error('请求错误');
    }
    // token过期，重新登录
    if (response.data.code === ResCode.AUTHORIZATION_EXPIRED) {
      message.error('登录过期，请重新登录');
      window.location.reload();
    }

    if (response.data.code === ResCode.AUTHORIZATION_EXPIRED) {
      // token即将失效，刷新token
    }
    // 接口权限不足
    if (response.data.code === ResCode.UNAUTHORIZED) {
      message.error('操作权限不足');
    }
    return response.data;
  },

  /**
   * 响应出错时执行
   * @param {*} error 错误对象
   * @param {*} options 应用配置
   * @returns {Promise<never>}
   */
  onRejected(error: Error, options) {
    const { message } = options;
    message.error(`响应出错：${error.message}`);
    return Promise.reject(error);
  },
};

export default {
  reqInterceptors: [reqCommon],
  resInterceptors: [resCommon],
};
