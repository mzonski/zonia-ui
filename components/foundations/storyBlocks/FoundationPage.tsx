import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { spacingMixin } from '@zonia-ui/theme';
import { HeadingVariant, SpacingBox, TextVariant } from '../../components';

const StyledFoundationPage = styled(SpacingBox)`
  width: 1440px;
  background-color: ${(props) => props.theme.colors.primary.grey100};
`;

const PageSpacer = styled.hr`
  border-color: ${(props) => props.theme.colors.primary.black};
  ${spacingMixin('margin', '8', ['vertical'])}
`;

export type FoundationPageProps = {
  title: string;
  subtitle: string;
} & PropsWithChildren;

export const FoundationPage = ({ title, subtitle, children }: Readonly<FoundationPageProps>) => {
  return (
    <StyledFoundationPage $ph="10" $pv="10">
      <HeadingVariant variant="h1">{title}</HeadingVariant>
      <TextVariant variant="xl">{subtitle}</TextVariant>
      <PageSpacer />
      {children}
      <PageSpacer />
    </StyledFoundationPage>
  );
};
