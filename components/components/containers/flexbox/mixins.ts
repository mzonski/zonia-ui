import { StyleFunctionDolar } from '@zonia-ui/theme';
import { css } from 'styled-components';

import type { FlexProps } from './Flexbox';

const flexboxGapMixin: StyleFunctionDolar<Pick<FlexProps, 'gap' | 'columnGap' | 'rowGap'>> = (ctx) => {
  const {
    $gap,
    $columnGap,
    $rowGap,
    theme: { spacing },
  } = ctx;

  return css`
    ${!!$gap && `gap: ${spacing[$gap]};`}
    ${!!$columnGap && `column-gap: ${spacing[$columnGap]};`}
    ${!!$rowGap && `row-gap: ${spacing[$rowGap]};`}
  `;
};

export const FlexboxMixins = {
  gap: flexboxGapMixin,
};
