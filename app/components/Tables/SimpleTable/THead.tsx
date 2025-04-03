import { ColumnDef } from "."

type Props<T> = {
  columns: ColumnDef<T>[];
}

export function THead<T>({ columns }: Props<T>) {
  return (
    <thead>
      <tr>
        {
          columns.map((col, index) => (
            <th
              key={`col_${index}`}
              className="p-2 text-indigo-800 text-center first:text-start last:text-end"
            >
              {col.header}
            </th>
          ))
        }
      </tr>
    </thead>
  )
}