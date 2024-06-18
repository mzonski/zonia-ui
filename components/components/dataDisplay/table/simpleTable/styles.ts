import { colorMixin, spacingMixin, typographyMixin, borderMixin } from '@zonia-ui/theme';
import type { DolarPrefix } from '@zonia-ui/theme';
import type { Property } from 'csstype';
import styled from 'styled-components';

import type { SimpleTableProps } from './SimpleTable';
import type { BaseLayoutTableProps, FixedLayoutTableProps, FluidLayoutTableProps } from './types';

const CommonLayoutContainer = styled.div<Pick<BaseLayoutTableProps, '$clean'>>`
  ${(props) => !props.$clean && colorMixin('bg', 'primary', 'white')}
`;

export const SimpleTableFixedLayoutContainer = styled(CommonLayoutContainer)<Pick<FixedLayoutTableProps, '$width'>>`
  width: ${(props) => `${props.$width}`};
`;

export const SimpleTableFluidLayoutContainer = styled(CommonLayoutContainer)<
  Pick<FluidLayoutTableProps, '$maxWidth' | '$minWidth'>
>`
  width: 100%;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}` : 'auto')};
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}` : '100%')};
`;

export const StyledSimpleTable = styled.table<Pick<SimpleTableProps, '$clean'>>`
  width: 100%;
  height: 100%;
  table-layout: fixed;
  overflow: hidden;

  ${typographyMixin('text', 'sm')}

  thead {
    th {
      ${typographyMixin('text', 'md', 'medium')}
    }

    ${(props) => props.$clean !== true && colorMixin('bg', 'primary', 'grey100')}
  }

  tbody {
    tr {
      &:nth-child(even) {
        ${(props) => props.$clean !== true && colorMixin('bg', 'primary', 'grey100')}
      }
    }
    td {
      ${borderMixin('tiny', 'vertical')}
      ${(props) => props.$clean === true && colorMixin('border', 'primary', 'grey300')}
    }
  }

  border: unset;
`;

type StyledSimpleTableTdProps = DolarPrefix<{
  width?: Property.Width;
  textAlign?: Property.TextAlign;
  selected?: boolean;
}>;

export const StyledSimpleTableTd = styled.td<StyledSimpleTableTdProps>`
  text-align: ${({ $textAlign = 'right' }) => $textAlign};
  width: ${({ $width }) => $width};

  ${spacingMixin('padding', '6', ['horizontal'])}
  ${spacingMixin('padding', '4', ['vertical'])}
`;

type StyledSimpleTableThProps = DolarPrefix<{
  textAlign?: Property.TextAlign;
  width?: Property.Width;
}>;
export const StyledSimpleTableTh = styled.th<StyledSimpleTableThProps>`
  text-align: ${({ $textAlign = 'right' }) => $textAlign};
  width: ${({ $width }) => $width};

  ${spacingMixin('padding', '6', ['horizontal'])}
  ${spacingMixin('padding', '4', ['vertical'])}
`;
