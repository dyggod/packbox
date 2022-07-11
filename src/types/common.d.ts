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
