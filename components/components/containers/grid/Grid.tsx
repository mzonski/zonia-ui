import styled from 'styled-components';
import type { DolarPrefix } from '@zonia-ui/theme';
import type { GridItemProps, GridProps } from './types';

const GridContainer = styled.div<DolarPrefix<GridProps>>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.$rows}, minmax(${(props) => props.$minRowHeight || 'auto'}, auto));
  gap: ${(props) => props.$gap || '0'};
  column-gap: ${(props) => props.$columnGap || props.$gap || '0'};
  row-gap: ${(props) => props.$rowGap || props.$gap || '0'};
  grid-auto-flow: ${(props) => props.$autoFlow || 'row'};
  justify-content: ${(props) => props.$justifyContent || 'start'};
  align-content: ${(props) => props.$alignContent || 'start'};
  justify-items: ${(props) => props.$justifyItems || 'stretch'};
  align-items: ${(props) => props.$alignItems || 'stretch'};
  max-width: ${(props) => props.$maxWidth || 'none'};
`;

const GridItem = styled.div<DolarPrefix<GridItemProps>>`
  grid-column: ${(props) => (props.$colSpan ? `span ${props.$colSpan}` : 'auto')};
  grid-row: ${(props) => (props.$rowSpan ? `span ${props.$rowSpan}` : 'auto')};
  align-self: ${(props) => props.$alignSelf || 'auto'};
  justify-self: ${(props) => props.$justifySelf || 'auto'};
`;

export const Grid = {
  Container: GridContainer,
  Item: GridItem,
};
