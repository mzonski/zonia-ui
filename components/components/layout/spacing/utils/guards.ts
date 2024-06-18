import type { DolarPrefix } from '@zonia-ui/theme';

import type {
  AroundMarginProps,
  AroundPaddingProps,
  HorizontalMarginProps,
  HorizontalPaddingProps,
  VerticalMarginProps,
  VerticalPaddingProps,
} from '../types.ts';

export const isMarginAroundProps = (props: object): props is DolarPrefix<AroundMarginProps> => {
  if ('$mh' in props || '$mv' in props) {
    return false;
  }

  return '$mt' in props || '$mb' in props || '$ml' in props || '$mr' in props;
};

export const isVerticalMarginProps = (props: object): props is DolarPrefix<VerticalMarginProps> => {
  if ('$mt' in props || '$mb' in props) {
    return false;
  }

  return '$mv' in props;
};

export const isHorizontalMarginProps = (props: object): props is DolarPrefix<HorizontalMarginProps> => {
  if ('$ml' in props || '$mr' in props) {
    return false;
  }

  return '$mh' in props;
};

export const isPaddingAroundProps = (props: object): props is DolarPrefix<AroundPaddingProps> => {
  if ('$ph' in props || '$pv' in props) {
    return false;
  }

  return '$pt' in props || '$pb' in props || '$pl' in props || '$pr' in props;
};

export const isVerticalPaddingProps = (props: object): props is DolarPrefix<VerticalPaddingProps> => {
  if ('$pt' in props || '$pb' in props) {
    return false;
  }

  return '$pv' in props;
};

export const isHorizontalPaddingProps = (props: object): props is DolarPrefix<HorizontalPaddingProps> => {
  if ('$pl' in props || '$pr' in props) {
    return false;
  }

  return '$ph' in props;
};
