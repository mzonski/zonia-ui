import type { Meta /* StoryObj */ } from '@storybook/react';
import { toEntries } from 'fp-ts/Record';
import styled from 'styled-components';
import {
  defaultBorderMixin,
  primaryColors,
  secondaryColors,
  spacingMixin,
  ThemePrimaryColor,
  ThemeSecondaryColor,
} from '@zonia-ui/theme';
import { omit } from 'lodash';
import { Flexbox, HeadingVariant, Stack, TextVariant } from '../components';
import { FoundationPage } from './storyBlocks/FoundationPage';

const meta = {
  title: '1. Foundations',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
// type Story = StoryObj<typeof meta>;

const StyledColorItem = styled.div`
  height: 96px;
  width: 200px;
  ${defaultBorderMixin()}
  display: flex;
  flex-direction: column;
  ${spacingMixin('padding', '2')}
  justify-content: space-between;
`;

const StyledPrimaryColorItem = styled(StyledColorItem)<{ $color: ThemePrimaryColor }>`
  background-color: ${(props) => props.theme.colors.primary[props.$color]};
`;
const StyledSecondaryColorItem = styled(StyledColorItem)<{ $color: ThemeSecondaryColor }>`
  background-color: ${(props) => props.theme.colors.secondary[props.$color]};
`;

export const Colors = () => {
  return (
    <FoundationPage title="Color palette" subtitle="Because we're using only displayed colors. None other allowed.">
      <Stack $gap="32px">
        <div>
          <HeadingVariant variant="h4">Primary colors</HeadingVariant>
          <Flexbox>
            <StyledPrimaryColorItem $color="black">
              <TextVariant color="white">black</TextVariant>
              <TextVariant color="white">#000</TextVariant>
            </StyledPrimaryColorItem>
            <StyledPrimaryColorItem $color="white">
              <TextVariant>white</TextVariant>
              <TextVariant>#FFF</TextVariant>
            </StyledPrimaryColorItem>
          </Flexbox>
          <Flexbox $wrap="wrap">
            {toEntries(omit(primaryColors, 'black', 'white')).map(([name, value]) => (
              <StyledPrimaryColorItem key={name} $color={name}>
                <TextVariant>{name}</TextVariant>
                <TextVariant>{value}</TextVariant>
              </StyledPrimaryColorItem>
            ))}
          </Flexbox>
        </div>
        <div>
          <HeadingVariant variant="h4">Secondary colors</HeadingVariant>
          <Flexbox $wrap="wrap">
            {toEntries(secondaryColors).map(([name, value]) => (
              <StyledSecondaryColorItem key={name} $color={name}>
                <TextVariant>{name}</TextVariant>
                <TextVariant>{value}</TextVariant>
              </StyledSecondaryColorItem>
            ))}
          </Flexbox>
        </div>
      </Stack>
    </FoundationPage>
  );
};
