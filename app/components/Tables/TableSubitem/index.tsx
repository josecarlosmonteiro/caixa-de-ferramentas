import { ColumnDef } from "../SimpleTable"

type Props<T> = {
  columns: Array<ColumnDef<T>>;
  data: Array<T>;
  subitem: keyof T;
}

export function TableSubItem<T>({ columns, data, subitem }: Props<T>) {
  return (
    <div className="p-2 rounded-lg border border-indigo-700">
      <table className="w-full">
        <thead>
          <tr>
            {
              columns.map((col, index) => (
                <th key={index} className="text-center first:text-start last:text-end">
                  {col.header}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody className="pt-4">
          {
            data.map((row, indexRow) => (
              <>
                <tr key={indexRow} className="text-center">
                  {
                    columns.map((col, indexCol) => (
                      <td key={`${indexRow}_${indexCol}`} className="first:text-start last:text-end">
                        {row[col.accessKey] as string}
                      </td>
                    ))
                  }
                </tr>

                {
                  row[subitem] &&
                  Array.isArray(row[subitem]) &&
                  row[subitem].map((subRow, subIndex) => (
                    <tr key={`subrow_${subIndex}`} className="text-center bg-white">
                      {
                        columns.map((col, colIndex) => (
                          <td key={`subcol_${subIndex}_${colIndex}`} className="last:text-end">
                            {subRow[col.accessKey] as string}
                          </td>
                        ))
                      }
                    </tr>
                  ))
                }
              </>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

type TSubTableExample = {
  name: string;
  address: string;
  email: string;
  others: { address: string, email: string }[];
}

const subitemTableData: TSubTableExample[] = [
  {
    name: 'Nome aqui 1',
    address: 'address 1',
    email: 'mail1@mail.com',
    others: [
      { address: 'address 2', email: 'mail2@mail.com' },
      { address: 'address 3', email: 'mail3@mail.com' },
    ]
  },
];

const subitemColumns: ColumnDef<TSubTableExample>[] = [
  { accessKey: 'name', header: 'Nome' },
  { accessKey: 'address', header: 'Endereço' },
  { accessKey: 'email', header: 'Email' },
]

export function TableSubItemExample() {
  return (
    <>
      <TableSubItem
        data={subitemTableData}
        columns={subitemColumns}
        subitem="others"
      />

      <div>
        Dados de renderização:
        <pre className="text-xs">{JSON.stringify(subitemTableData, null, 2)}</pre>
      </div>
    </>
  )
}