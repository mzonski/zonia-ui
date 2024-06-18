import { omit } from 'lodash';

import type { TypographyProps } from './types';
import { HeadingVariant } from "./HeadingVariant";
import { TextVariant } from "./TextVariant";

export function Typography(props: TypographyProps) {
  if (props.$type === 'head') {
    return <HeadingVariant {...omit(props, '$type')} />;
  }

  return <TextVariant {...omit(props, '$type')} />;
}
