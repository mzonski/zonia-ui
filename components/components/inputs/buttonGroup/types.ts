import { StackProps } from '../../containers';
import { ButtonProps } from '../button';

export type ButtonGroupProps = Partial<
  Omit<ButtonProps, 'fill'> & Pick<StackProps, 'direction'> & { stick: StackProps['direction'] }
>;
