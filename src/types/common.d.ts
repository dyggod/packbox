import { MessageApi } from 'ant-design-vue';

export interface Options {
  label?: string;
  value?: string | number;
}

export interface StrOptions extends Options {
  value: string
}

export interface NumOptions extends Options {
  value: number
}

export type Func = () => void;

export interface Uncertainty {
  [key: string]: any;
}

export interface UncertaintyStr {
  [key: string]: string;
}

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
