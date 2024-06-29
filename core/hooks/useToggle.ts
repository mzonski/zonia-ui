import { useState, useCallback } from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  const set = useCallback((newValue: boolean) => {
    if (newValue === undefined) return;
    setValue(newValue);
  }, []);

  return [value, toggle, set] as const;
}
