// TODO: maybe better name for this type will be to exclude or not allow or smthg
export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]: never;
};

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type NonNullableDeep<T> = {
  [P in keyof T]: NonNullable<T[P]> extends object ? NonNullableDeep<NonNullable<T[P]>> : NonNullable<T[P]>;
};
