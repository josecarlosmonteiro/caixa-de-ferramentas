import { ColumnDef } from ".";

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
}

export function TBody<T>({ data, columns, }: Props<T>) {
  return (
    <tbody>
      {
        data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
              columns.map((col, colIndex) => (
                <td
                  key={`${rowIndex}_${colIndex}`}
                  className="p-1 px-2 not-first:text-center last:text-end"
                >
                  {row[col.accessKey] as string}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  )
}