import { MessageApi } from 'ant-design-vue';

export interface BootStrapOptions {
    message: MessageApi
  }

export interface ReqInterceptor {
    onFulfilled: (config: AxiosRequestConfig, options: BootStrapOptions) => void;
    onRejected: (error: Error, options: BootStrapOptions) => void;
  }

export interface ResInterceptor {
    onFulfilled: (response: AxiosResponse, options: BootStrapOptions) => void;
    onRejected: (error: Error, options: BootStrapOptions) => void;
  }

export interface Interceptors {
    reqInterceptors: ReqInterceptor[];
    resInterceptors: ResInterceptor[];
  }
