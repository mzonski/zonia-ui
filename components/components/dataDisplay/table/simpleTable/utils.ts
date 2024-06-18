import type { ComponentType } from 'react';

import { SimpleTableFixedLayoutContainer, SimpleTableFluidLayoutContainer } from './styles';
import type {
  FixedLayoutTableProps,
  FluidLayoutTableProps,
  HeaderContentOptions,
  HeaderOptions,
  HeaderRendererOptions,
  LayoutTableProps,
  SimpleTableRequiredProps,
} from './types';

const isLayoutFixed = (layoutProps: Partial<LayoutTableProps>): layoutProps is FixedLayoutTableProps =>
  layoutProps.$layoutType === 'fixed';
const isLayoutFluid = (layoutProps: Partial<LayoutTableProps>): layoutProps is FluidLayoutTableProps =>
  layoutProps.$layoutType === 'fluid';

export const getTableContainer = ({
  $clean,
  ...props
}: Partial<LayoutTableProps>): [
  ComponentType<LayoutTableProps>,
  Readonly<FixedLayoutTableProps | FluidLayoutTableProps>,
] => {
  if (!('$layoutType' in props)) {
    const fluidProps: FluidLayoutTableProps = { $layoutType: 'fluid', $clean };
    return [SimpleTableFluidLayoutContainer, fluidProps];
  }

  if (isLayoutFixed(props)) {
    const { $width } = props;
    const fixedProps: FixedLayoutTableProps = { $layoutType: 'fixed', $width, $clean };
    return [SimpleTableFixedLayoutContainer, fixedProps];
  }

  if (isLayoutFluid(props)) {
    const { $minWidth, $maxWidth } = props;
    const fluidProps: FluidLayoutTableProps = { $layoutType: 'fluid', $minWidth, $maxWidth, $clean };
    return [SimpleTableFluidLayoutContainer, fluidProps];
  }

  throw new Error('Invalid layout type');
};

export const isHeaderContent = <TData extends SimpleTableRequiredProps>(
  options: HeaderOptions<TData>,
): options is HeaderContentOptions<TData> => options.type === 'text';
export const isHeaderElement = <TData extends SimpleTableRequiredProps>(
  options: HeaderOptions<TData>,
): options is HeaderRendererOptions<TData> => options.type === 'element';
