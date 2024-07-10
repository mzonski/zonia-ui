import { SvgProps, ValidColorFormat } from '@zonia-ui/theme';
import { Property } from 'csstype';

export type ColorfulSpinnerProps = {
  strokeColor?: ValidColorFormat | 'currentColor';
  strokeWidth?: Property.StrokeWidth;
  disableOuterCircle?: boolean;
} & Pick<SvgProps, 'size'>;
