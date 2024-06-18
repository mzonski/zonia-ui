export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isFunction<TVal = undefined, TOut = void>(value: unknown): value is (val: TVal) => TOut {
  return typeof value === 'function';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

export function isBigInt(value: unknown): value is number {
  return typeof value === 'bigint';
}

export function isObject(value: unknown): value is object {
  return typeof value === 'object';
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}
