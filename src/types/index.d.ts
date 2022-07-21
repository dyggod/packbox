// 选择项类型
declare interface Options {
  label?: string;
  value?: string | number;
}

// 值是字符串的选择项类型
declare interface StrOptions extends Options {
  value: string;
}

// 值是数字的选择项类型
declare interface NumOptions extends Options {
  value: number;
}

// 无返回值的函数类型
declare type Func = () => void;

// 不定值的对象类型
declare interface Uncertainty {
  [key: string]: any;
}

// 定字符串值的对象类型
declare interface UncertaintyStr {
  [key: string]: string;
}
