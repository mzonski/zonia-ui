import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import {
  defaultBorderMixin,
  focusOutlineMixin,
  boxShadowMixin,
  shapeMixin,
  spacingMixin,
  ThemeElevationType,
  ThemeOutline,
  ThemePrimaryColor,
} from '@zonia-ui/theme';
import { HeadingVariant, Stack, TextVariant } from '../components';
import { FoundationPage } from './storyBlocks/FoundationPage';

const meta = {
  title: '1. Foundations',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

const StyledEffectRow = styled(Stack)`
  background-color: ${(props) => props.theme.colors.primary.white};
  ${spacingMixin('padding', '10')}
  ${defaultBorderMixin()}
  ${shapeMixin('rounded')}
`;

const StyledShadowItem = styled.div<{ $type: ThemeElevationType; $color: ThemePrimaryColor }>`
  background-color: ${(props) => props.theme.colors.primary.white};
  ${defaultBorderMixin()}
  ${(props) => boxShadowMixin(props.$type, props.$color)}
  ${spacingMixin('padding', '44', ['horizontal'])}
  ${spacingMixin('padding', '14', ['vertical'])}
  ${shapeMixin('rounded')}
`;

const StyledOutlineItem = styled.div<{ $type: ThemeOutline; $color: ThemePrimaryColor }>`
  background-color: ${(props) => props.theme.colors.primary.white};
  ${defaultBorderMixin()}
  ${(props) => focusOutlineMixin(props.$type, props.$color)}
  ${spacingMixin('padding', '44', ['horizontal'])}
  ${spacingMixin('padding', '14', ['vertical'])}
  ${shapeMixin('rounded')}
`;

export const Effects = () => {
  return (
    <FoundationPage
      title="Effects"
      subtitle="Shadows are commonly used to create depth, hierarchy, and visual separation between the elements. They provide a sense of realism and help users understand spatial relationships between different UI components."
    >
      <Stack $gap="8">
        <div>
          <HeadingVariant variant="h4">Shadow</HeadingVariant>
          <StyledEffectRow $direction="right" $gap="8" $justify="space-around">
            <StyledShadowItem $type="md" $color="black">
              <TextVariant weight="bold">md</TextVariant>
            </StyledShadowItem>
            <StyledShadowItem $type="lg" $color="black">
              <TextVariant weight="bold">lg</TextVariant>
            </StyledShadowItem>
            <StyledShadowItem $type="xl" $color="black">
              <TextVariant weight="bold">xl</TextVariant>
            </StyledShadowItem>
          </StyledEffectRow>
        </div>
        <div>
          <HeadingVariant variant="h4">Color shadow</HeadingVariant>
          <StyledEffectRow $direction="right" $gap="8" $justify="space-around">
            <StyledShadowItem $type="md" $color="primary">
              <TextVariant weight="bold">md</TextVariant>
            </StyledShadowItem>
            <StyledShadowItem $type="lg" $color="primary">
              <TextVariant weight="bold">lg</TextVariant>
            </StyledShadowItem>
            <StyledShadowItem $type="xl" $color="primary">
              <TextVariant weight="bold">xl</TextVariant>
            </StyledShadowItem>
          </StyledEffectRow>
        </div>
        <div>
          <HeadingVariant variant="h4">Focus ring color</HeadingVariant>
          <StyledEffectRow $direction="right" $gap="8" $justify="space-around">
            <StyledOutlineItem $type="md" $color="primary">
              <TextVariant weight="bold">md</TextVariant>
            </StyledOutlineItem>
            <StyledOutlineItem $type="lg" $color="primary">
              <TextVariant weight="bold">lg</TextVariant>
            </StyledOutlineItem>
            <StyledOutlineItem $type="xl" $color="primary">
              <TextVariant weight="bold">xl</TextVariant>
            </StyledOutlineItem>
          </StyledEffectRow>
        </div>
      </Stack>
    </FoundationPage>
  );
};
