import { useRef } from 'react';
import { v4 } from 'uuid';

export const useUniqueId = (id?: string | number | null) => {
  const { current: fieldId } = useRef(id ?? v4());
  return fieldId;
};
