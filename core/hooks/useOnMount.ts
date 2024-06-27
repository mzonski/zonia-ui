import { useRef } from 'react';

export const useOnMount = (callback: () => void) => {
  const firstRender = useRef(true);

  if (firstRender.current) {
    callback();
    firstRender.current = false;
  }
};
