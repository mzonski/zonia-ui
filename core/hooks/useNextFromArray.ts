import { useCallback, useState } from 'react';

const useNextFromArray = <T>(array: ReadonlyArray<T>) => {
  if (array.length === 0) throw new Error('Array is empty');
  const [currentIndex, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((old) => (old + 1) % array.length);
  }, [array]);

  const set = useCallback(
    (idx: number) => {
      console.log('=>(useNextFromArray.ts:14) set, idx', idx);
      setIndex(idx);
    },
    [array],
  );

  return [array[currentIndex], next, set] as const;
};

export default useNextFromArray;
