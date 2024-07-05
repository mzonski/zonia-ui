import { StyleFunctionDolar } from '@zonia-ui/theme';
import { css } from 'styled-components';

import { StackProps } from './types';

const stackBorderMixin: StyleFunctionDolar<
  Pick<StackProps, 'borderColor' | 'borderSize' | 'shape' | 'gap' | 'bgColor'>
> = (ctx) => {
  const {
    $gap,
    $shape,
    $borderColor,
    $borderSize,
    $bgColor,
    theme: {
      spacing,
      borders: { size: bordersSize, defaultType },
      shape,
      colors: { primary },
    },
  } = ctx;

  if (!$borderColor || !$borderSize || !$bgColor)
    return css`
      ${!!$gap && `gap: ${spacing[$gap]};`}
    `;

  return css`
    *:not(:first-child, :last-child) {
      ${!!$gap && `padding-block: ${spacing[$gap]};`}
    }
    *:not(:last-child) {
      border-bottom: ${bordersSize[$borderSize]} ${defaultType} ${primary[$borderColor]};
    }

    *:is(:first-child) {
      ${!!$gap && `padding-bottom: ${spacing[$gap]};`}
    }

    *:is(:last-child) {
      ${!!$gap && `padding-top: ${spacing[$gap]};`}
    }

    ${!!$shape && `border-radius: ${shape[$shape]};`}
    border: ${bordersSize[$borderSize]} ${defaultType} ${primary[$borderColor]};
    background-color: ${primary[$bgColor ?? 'grey100']};
  `;
};

const stackCenterAlignmentMixin: StyleFunctionDolar<Pick<StackProps, 'center'>> = (ctx) => {
  const { $center } = ctx;

  if (!$center) return null;

  return css`
    justify-content: center;
    align-items: center;
  `;
};

export const StackMixins = {
  border: stackBorderMixin,
  center: stackCenterAlignmentMixin,
};
