export function debounce<T extends unknown[], R>(
  func: (...args: T) => R,
  waitMs: number,
): ((...args: T) => void) & { cancel: () => void; isDebouncing: () => boolean } {
  let timeout: number | undefined;

  const debounceFn = function Debounce(...args: T): void {
    const later = () => {
      timeout = undefined;
      func(...args);
    };

    clearTimeout(timeout);
    timeout = window.setTimeout(later, waitMs);
  };

  debounceFn.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };

  debounceFn.isDebouncing = () => timeout !== undefined;

  return debounceFn;
}
