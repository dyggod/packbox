import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Interceptors, BootStrapOptions } from '#/common';

// 请求配置
axios.defaults.baseURL = String(import.meta.env.VITE_API_BASE_URL);
axios.defaults.withCredentials = true;
axios.defaults.timeout = 5000;

// HTTP状态码
export enum HttpStatus {
  OK = 200, // 成功
  CREATED = 201, // 创建成功
  NO_CONTENT = 204, // 无内容
  BAD_REQUEST = 400, // 请求错误
  UNAUTHORIZED = 401, // 未授权
  FORBIDDEN = 403, // 禁止访问
  NOT_FOUND = 404, // 找不到资源
  INTERNAL_SERVER_ERROR = 500, // 服务器错误
  BAD_GATEWAY = 502, // 网关错误
}

// 认证类型
export enum AuthType {
  BASIC = 'basic', // 基础认证
  BEARER = 'bearer', // bearer认证
}

// 请求方法
export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  BATCHDELETE = 'patchdelete',
  HEAD = 'head',
  OPTIONS = 'options',
  TRACE = 'trace',
  CONNECT = 'connect',
}

// 自定义返回状态码
export enum ResCode {
  SUCCESS = 200, // 成功
  UNAUTHORIZED = 401, // 未授权
  AUTHORIZATION_EXPIRED = 40101, // 认证过期
  AUTHORIZATION_EXPIRING = 40102, // 认证即将过期
}

// 请求参数
export type RequestParams = {
  [key: string]: any;
};

/**
 * 封装axios请求
 * @param url 请求地址
 * @param method 请求方法
 * @param params 请求参数
 * @param config 请求配置
 * @returns Promise<any>
 */
export async function request(
  url: string,
  method: HttpMethod,
  params: RequestParams,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> {
  switch (method) {
    case HttpMethod.GET:
      return axios.get(url, { params, ...config });
    case HttpMethod.POST:
      return axios.post(url, params, config);
    case HttpMethod.PUT:
      return axios.put(url, params, config);
    case HttpMethod.PATCH:
      return axios.patch(url, params, config);
    case HttpMethod.DELETE:
      return axios.delete(url, params);
    case HttpMethod.BATCHDELETE:
      return axios({
        method: 'delete',
        url,
        data: params,
        ...config,
      });
    default:
      return axios.get(url, { params, ...config });
  }
}

/**
 * 加载 axios 拦截器
 * @param interceptors
 * @param options
 */
export function loadInterceptors(interceptors: Interceptors, options: BootStrapOptions) {
  const { reqInterceptors, resInterceptors } = interceptors;

  // 加载请求拦截器
  reqInterceptors.forEach((item) => {
    let { onFulfilled, onRejected } = item;
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      onFulfilled = (config) => config;
    }
    if (!onRejected || typeof onRejected !== 'function') {
      onRejected = (error) => Promise.reject(error);
    }
    axios.interceptors.request.use(
      (config) => onFulfilled(config, options),
      (error) => onRejected(error, options),
    );
  });

  // 加载响应拦截器
  resInterceptors.forEach((item) => {
    let { onFulfilled, onRejected } = item;
    if (!onFulfilled || typeof onFulfilled !== 'function') {
      onFulfilled = (response) => response;
    }
    if (!onRejected || typeof onRejected !== 'function') {
      onRejected = (error) => Promise.reject(error);
    }
    axios.interceptors.response.use(
      (response) => onFulfilled(response, options),
      (error) => onRejected(error, options),
    );
  });
}

export default request;
