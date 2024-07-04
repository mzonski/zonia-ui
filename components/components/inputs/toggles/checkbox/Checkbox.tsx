import { ForwardedRef, forwardRef } from 'react';
import { ToggleStyles } from '../_shared';
import { CheckboxProps } from './types';
import { CheckboxStyles } from './style/checkbox.styles';

const CheckboxComponent = (
  {
    color = 'primary',
    size = 'sm',
    outlineColor = 'primary',
    borderColor = 'black',
    shape = 'medium',
    borderType = 'tiny',
    label,
    text,
    ...props
  }: Readonly<CheckboxProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <CheckboxStyles.Container
      $color={color}
      $size={size}
      $borderColor={borderColor}
      $outlineColor={outlineColor}
      $shape={shape}
      $borderType={borderType}
      $hasText={!!text}
    >
      <CheckboxStyles.Input ref={ref} {...props} />
      <CheckboxStyles.Element>
        <CheckboxStyles.Svg>
          <CheckboxStyles.Path className="checkbox-left-path" />
          <CheckboxStyles.Path className="checkbox-right-path" />
        </CheckboxStyles.Svg>
      </CheckboxStyles.Element>
      {!label && !text ? null : (
        <ToggleStyles.HtmlLabel>
          {label && <ToggleStyles.Label $omitLineHeight={!text}>{label}</ToggleStyles.Label>}
          {text && <ToggleStyles.Text>{text}</ToggleStyles.Text>}
        </ToggleStyles.HtmlLabel>
      )}
    </CheckboxStyles.Container>
  );
};

const Checkbox = forwardRef(CheckboxComponent);

export default Checkbox;
