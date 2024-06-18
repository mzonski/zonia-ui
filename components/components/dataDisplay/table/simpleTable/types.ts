import { DolarPrefix } from '@zonia-ui/theme';
import type { Property } from 'csstype';
import { CSSProperties, ReactNode } from 'react';

export type BaseLayoutTableProps = DolarPrefix<{
  clean?: boolean;
}>;

export type FixedLayoutTableProps = BaseLayoutTableProps &
  DolarPrefix<
    {
      layoutType: 'fixed';
    } & Required<Pick<CSSProperties, 'width'>>
  >;

export type FluidLayoutTableProps = BaseLayoutTableProps &
  DolarPrefix<
    {
      layoutType: 'fluid';
    } & Pick<CSSProperties, 'minWidth' | 'maxWidth'>
  >;

export type LayoutTableProps = FixedLayoutTableProps | FluidLayoutTableProps;

export type SimpleTableRequiredProps = {
  id: number | string;
};

type BaseHeaderOptions<TData extends SimpleTableRequiredProps> = {
  width?: Property.Width;
  colSpan?: number;
  dataProp: keyof TData;
  colTextAlign?: Property.TextAlign;
  renderCellContent?: (rowIndex: number, value: TData[keyof TData]) => ReactNode;
};

export type HeaderContentOptions<TData extends SimpleTableRequiredProps> = BaseHeaderOptions<TData> & {
  type: 'text';
  content: string;
};

export type HeaderRendererOptions<TData extends SimpleTableRequiredProps> = BaseHeaderOptions<TData> & {
  type: 'element';
  renderHeaderContent: (headerIndex: number) => ReactNode;
};

export type HeaderOptions<TData extends SimpleTableRequiredProps> =
  | HeaderContentOptions<TData>
  | HeaderRendererOptions<TData>;
