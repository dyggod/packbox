export interface SpinOptions {
  msg?: string,
  duration?: number,
}

export interface SpinPlugin {
  show(options?: SpinOptions): void;
  end(): void;
}
