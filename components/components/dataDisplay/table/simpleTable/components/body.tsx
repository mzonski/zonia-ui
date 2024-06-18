import { Fragment } from 'react';
import { StyledSimpleTableTd } from '../styles';
import type { SimpleTableProps } from '../SimpleTable';
import type { SimpleTableRequiredProps } from '../types';

type SimpleTableBodyProps<TData extends SimpleTableRequiredProps> = Pick<SimpleTableProps<TData>, 'data' | 'headers'>;

function SimpleTableBody<TData extends SimpleTableRequiredProps>({
  data,
  headers,
}: Readonly<SimpleTableBodyProps<TData>>) {
  return (
    <tbody>
      {data.map((entry, rowIndex) => (
        <Fragment key={entry.id}>
          <tr>
            {Object.values(headers).map(({ renderCellContent, ...header }) => {
              const cellValue = entry[header.dataProp];
              return (
                <StyledSimpleTableTd
                  key={`${entry.id}-${String(header.dataProp)}`}
                  colSpan={header.colSpan}
                  $textAlign={header.colTextAlign}
                  $width={header.width}
                >
                  {renderCellContent?.(rowIndex, cellValue) ?? String(cellValue)}
                </StyledSimpleTableTd>
              );
            })}
          </tr>
        </Fragment>
      ))}
    </tbody>
  );
}

export default SimpleTableBody;
SimpleTableBody.defaultName = 'ZUITableBody';
