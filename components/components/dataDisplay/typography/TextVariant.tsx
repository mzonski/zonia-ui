import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { TextProps } from './types';
import { textTypographyMixin } from './utils/mixins';

export type StyledTextProps = Required<DolarPrefix<Pick<TextProps, 'variant' | 'weight' | 'color'>>>;
const StyledText = styled.div<StyledTextProps>`
  ${textTypographyMixin}
`;

export function TextVariant({
  children,
  as: Component = 'span',
  variant = 'md',
  weight = 'medium',
  color = 'black',
}: Readonly<Omit<TextProps, 'type'>>) {
  return (
    <StyledText as={Component} $variant={variant} $weight={weight} $color={color}>
      {children}
    </StyledText>
  );
}
