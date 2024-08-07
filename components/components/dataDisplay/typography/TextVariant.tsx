import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { TextProps } from './types';
import { textTypographyMixin } from './utils/mixins';

export type StyledTextProps = DolarPrefix<
  Required<Pick<TextProps, 'variant'>> & Partial<Pick<TextProps, 'color' | 'weight' | 'omitLineHeight'>>
>;
export const StyledText = styled.div<StyledTextProps>`
  ${textTypographyMixin}
`;

export function TextVariant({
  children,
  as: Component = 'span',
  variant = 'md',
  weight = 'medium',
  omitLineHeight = false,
  color,
}: Readonly<Omit<TextProps, 'type'>>) {
  return (
    <StyledText as={Component} $variant={variant} $weight={weight} $color={color} $omitLineHeight={omitLineHeight}>
      {children}
    </StyledText>
  );
}
