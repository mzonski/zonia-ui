import { isNumber, isBoolean, isFunction, isString, isUndefined, isBigInt, isObject, isSymbol } from './primitives';

describe('Primitive Type Validation', () => {
  it('validates if input is a number', () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber('5')).toBe(false);
  });

  it('validates if input is a boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean('true')).toBe(false);
  });

  it('validates if input is a function', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction('function')).toBe(false);
  });

  it('validates if input is a string', () => {
    expect(isString('string')).toBe(true);
    expect(isString(2137)).toBe(false);
  });

  it('validates if input is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined('undefined')).toBe(false);
  });

  it('validates if input is a BigInt', () => {
    expect(isBigInt(BigInt(2137))).toBe(true);
    expect(isBigInt(2137)).toBe(false);
  });

  it('validates if input is an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject('object')).toBe(false);
  });

  it('validates if input is a symbol', () => {
    expect(isSymbol(Symbol(2137))).toBe(true);
    expect(isSymbol('symbol')).toBe(false);
  });
});
