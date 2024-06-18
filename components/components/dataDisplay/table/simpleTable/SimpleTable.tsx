import type { ReactElement } from 'react';
import type { HeaderOptions, LayoutTableProps, SimpleTableRequiredProps } from './types';
import { getTableContainer } from './utils';
import { StyledSimpleTable } from './styles';
import TableHeader from './components/header';
import SimpleTableBody from './components/body';

export type SimpleTableProps<TData extends SimpleTableRequiredProps = SimpleTableRequiredProps> =
  Partial<LayoutTableProps> & {
    data: TData[];
    headers: Record<number, HeaderOptions<TData>>;
    renderFooter?: () => ReactElement;
  };

export default function SimpleTable<TData extends SimpleTableRequiredProps>(props: SimpleTableProps<TData>) {
  const [TableLayoutContainer, tableContainerElementProps] = getTableContainer(props);

  const { data, headers, renderFooter } = props;

  return (
    <TableLayoutContainer {...tableContainerElementProps}>
      <StyledSimpleTable $clean={props.$clean}>
        <TableHeader headers={headers} />
        <SimpleTableBody headers={headers} data={data} />
        {renderFooter && <tfoot>{renderFooter()}</tfoot>}
      </StyledSimpleTable>
    </TableLayoutContainer>
  );
}

SimpleTable.defaultName = 'ZUISimpleTable';
SimpleTable.defaultProps = {
  renderFooter: undefined,
};
