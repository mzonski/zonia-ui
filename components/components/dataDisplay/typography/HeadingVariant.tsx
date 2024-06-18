import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { HeadingProps } from './types';
import { headingTypographyMixin } from './utils/mixins';

export type StyledHeadingProps = Required<DolarPrefix<Pick<HeadingProps, 'variant' | 'weight' | 'color'>>>;
const StyledHeading = styled.div<StyledHeadingProps>`
  ${headingTypographyMixin}
`;

export function HeadingVariant({
  as,
  children,
  variant = 'h1',
  weight = 'normal',
  color = 'black',
}: Readonly<Omit<HeadingProps, 'type'>>) {
  return (
    <StyledHeading as={as ?? variant} $variant={variant} $weight={weight} $color={color}>
      {children}
    </StyledHeading>
  );
}
