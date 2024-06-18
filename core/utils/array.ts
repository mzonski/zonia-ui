export function createMapArray<T = number>(n: number, mapFn: (index: number) => T): T[] {
  return Array.from({ length: n }, (_, index) => mapFn(index));
}

export function createArray<T = number>(n: number, startIndex: number = 0, mapFn?: (index: number) => T): T[] {
  if (mapFn) {
    return createMapArray(n, (index) => mapFn(startIndex + index));
  }
  return Array.from({ length: n }, (_, index) => (startIndex + index) as unknown as T);
}
