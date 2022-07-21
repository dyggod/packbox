/**
 * 深度复制
 * @param {*} obj
 * @returns object
 */
export function deepClone(params: Uncertainty): Uncertainty | Uncertainty[] {
  if (!params) {
    throw new Error('params is empty');
  }

  if (typeof params !== 'object') {
    throw new Error('params is not object');
  }

  if (params.constructor === Date) {
    return new Date(params);
  }

  if (params.constructor === RegExp) {
    return new RegExp(params);
  }

  const newObject: Uncertainty | Uncertainty[] = Array.isArray(params) ? [] : {};

  Object.keys(params).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      // @ts-ignore
      newObject[key] = typeof params[key] === 'object' ? deepClone(params[key]) : params[key];
    }
  });

  return newObject;
}

export const common = {
  deepClone,
};
