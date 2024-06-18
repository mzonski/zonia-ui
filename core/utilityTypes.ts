/* eslint-disable @typescript-eslint/no-explicit-any */
export type IsUnion<T> = [T] extends [never] ? false : T extends any ? ([T] extends [T] ? false : true) : never;
export type EnsureUnion<T> = IsUnion<T> extends true ? T : never;

export type Autocomplete<T> = T extends EnsureUnion<T> ? string & T : never;

type NonNullableProperties<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};

export type PickNonNullable<T, K extends keyof T> = NonNullableProperties<Pick<T, K>>;
export type StripUndefined<T> = T extends undefined ? NonNullable<T> : T;

export type PrefixPropsWithDollar<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
