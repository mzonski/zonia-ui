import type { SimpleTableProps } from '../SimpleTable';
import type { SimpleTableRequiredProps } from '../types';
import { isHeaderContent, isHeaderElement } from '../utils';
import { StyledSimpleTableTh } from '../styles';

type Props<TData extends SimpleTableRequiredProps> = Pick<SimpleTableProps<TData>, 'headers'>;

function SimpleTableHeader<TData extends SimpleTableRequiredProps>({ headers }: Readonly<Props<TData>>) {
  return (
    <thead>
      <tr>
        {headers.map((headerEntry, index) => {
          const { id, colTextAlign, colSpan, width } = headerEntry;
          return (
            <StyledSimpleTableTh key={id} $textAlign={colTextAlign} colSpan={colSpan} $width={width}>
              {isHeaderContent(headerEntry) && headerEntry.content}
              {isHeaderElement(headerEntry) && headerEntry.renderHeaderContent(index)}
            </StyledSimpleTableTh>
          );
        })}
      </tr>
    </thead>
  );
}

export default SimpleTableHeader;
SimpleTableHeader.defaultName = 'ZUISimpleTableHeader';
