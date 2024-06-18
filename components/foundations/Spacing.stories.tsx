import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { sizeSorter, valueToRem } from '@zonia-ui/theme';
import { themeSpacing } from '@zonia-ui/theme/themes/spacing';
import { Property } from 'csstype';
import SimpleTable from '../components/dataDisplay/table/simpleTable/SimpleTable';
import { FoundationPage } from './storyBlocks/FoundationPage';

const meta = {
  title: '1. Foundations',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;

const StyledSpacingDisplay = styled.div<{ $width: Property.Width }>`
  background-color: ${(props) => props.theme.colors.secondary.fusionCoralLight};
  width: ${(props) => props.$width};
  height: 80%;
`;

export const Spacing = () => {
  return (
    <FoundationPage
      title="Spacing"
      subtitle="Similar to our color scale, incorporating a defined spacing system enables you to work efficiently and maintain consistency throughout your design process. By adhering to a consistent and scalable spacing system, you eliminate the need for guesswork and uncertainty during both design and development phases. This approach empowers you to work with a limited set of spacing options, streamlining your workflow and fostering a cohesive visual experience."
    >
      <SimpleTable
        $clean
        headers={{
          1: { type: 'text', content: 'Name', colTextAlign: 'left', dataProp: 'name' },
          2: {
            type: 'text',
            content: 'Rem',
            dataProp: 'rem',
            colTextAlign: 'left',
          },
          3: {
            type: 'text',
            content: 'Pixel',
            dataProp: 'px',
            colTextAlign: 'left',
          },
          4: {
            type: 'text',
            content: 'Example',
            dataProp: 'px',
            width: '50%',
            colTextAlign: 'left',
            renderCellContent: (_idx, value) => (value === '0px' ? '👻' : <StyledSpacingDisplay $width={value} />),
          },
        }}
        data={Object.entries(themeSpacing)
          .map(([key, value]) => ({
            id: key,
            name: key,
            rem: valueToRem(value),
            px: value,
          }))
          .sort((p, n) => sizeSorter(p.px, n.px))}
      />
    </FoundationPage>
  );
};
