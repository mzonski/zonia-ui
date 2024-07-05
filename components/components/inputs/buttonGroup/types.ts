import { ValuesType } from 'utility-types';

import { StackProps } from '../../containers';
import { ButtonProps } from '../button';

export const ButtonGroupSizes = ['2xs', 'xs', 'sm', 'md', 'lg'] as const;
export type ButtonGroupSize = ValuesType<typeof ButtonGroupSizes>;

export type ButtonGroupProps = Partial<
  ButtonProps & Pick<StackProps, 'direction'> & { stick: StackProps['direction'] }
>;
