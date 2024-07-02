import { useCallback, useState } from 'react';

const useNextFromArray = <T>(array: T[]) => {
  if (array.length === 0) throw new Error('Array is empty');
  const [currentIndex, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((old) => (old + 1) % array.length);
  }, [array]);

  return [array[currentIndex], next] as const;
};

export default useNextFromArray;
