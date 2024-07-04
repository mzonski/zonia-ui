import { RuleBuilder, StyleFunctionDolar } from '@zonia-ui/theme';
import { css } from 'styled-components';

import { GridProps } from './types';

const gridSpacingMixin: StyleFunctionDolar<Pick<GridProps, 'gap' | 'columnGap' | 'rowGap'>> = (ctx) => {
  const {
    $gap,
    $columnGap,
    $rowGap,
    theme: { spacing },
  } = ctx;

  const ruleBuilder = new RuleBuilder();

  if ($gap) {
    ruleBuilder.push(css`
      gap: ${spacing[$gap]};
    `);
  }

  if ($columnGap) {
    ruleBuilder.push(css`
      column-gap: ${spacing[$columnGap]};
    `);
  }

  if ($rowGap) {
    ruleBuilder.push(css`
      row-gap: ${spacing[$rowGap]};
    `);
  }

  return ruleBuilder.build();
};

export const GridMixins = {
  spacing: gridSpacingMixin,
};
