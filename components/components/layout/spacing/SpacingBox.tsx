import styled from 'styled-components';
import type { DolarPrefix } from '@zonia-ui/theme';
import { spacingBoxMixin } from './utils/mixins';
import type { SpacingProps } from './types';

export const SpacingBox = styled.div<DolarPrefix<SpacingProps>>`
  display: ${(props) => (props.$inline ? 'inline-block' : 'block')};
  ${spacingBoxMixin}
`;

// function SpacingBoxFn({ children, ...rest }: SpacingBoxProps<C>) {
//   return <StyledSpacingBox {...prefixPropsWithDolar(rest)}>{children}</StyledSpacingBox>;
// }
//
// const testProp1 = {} satisfies SpacingBoxProps;
// const testProp2 = {
//   mh: '3',
//   mv: '2',
// } satisfies SpacingBoxProps;
//
// const testProp3 = {
//   mh: '3',
//   mb: '2',
// } satisfies SpacingBoxProps;
//
// const testProp4 = {
//   mv: '3',
//   mr: '2',
// } satisfies SpacingBoxProps;
//
// console.log(testProp1, testProp2, testProp3, testProp4);
