import { StyleFunctionDolar } from '@zonia-ui/theme';
import { css } from 'styled-components';

import type { FlexProps } from './Flexbox';

const flexboxGapMixin: StyleFunctionDolar<Pick<FlexProps, 'flexGap' | 'columnGap' | 'rowGap'>> = (ctx) => {
  const {
    $flexGap,
    $columnGap,
    $rowGap,
    theme: { spacing },
  } = ctx;

  return css`
    ${!!$flexGap && `gap: ${spacing[$flexGap]};`}
    ${!!$columnGap && `column-gap: ${spacing[$columnGap]};`}
    ${!!$rowGap && `row-gap: ${spacing[$rowGap]};`}
  `;
};

export const FlexboxMixins = {
  gap: flexboxGapMixin,
};
