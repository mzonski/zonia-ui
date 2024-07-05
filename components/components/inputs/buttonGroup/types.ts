import { StackProps } from '../../containers';
import { ButtonProps } from '../button';

export type ButtonGroupProps = Partial<
  ButtonProps & Pick<StackProps, 'direction'> & { stick: StackProps['direction'] }
>;
