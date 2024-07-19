import { useRef } from 'react';
import { v4 } from 'uuid';

export const useUniqueId = (id?: string | null) => {
  const { current: fieldId } = useRef(id ?? v4());
  return fieldId;
};
