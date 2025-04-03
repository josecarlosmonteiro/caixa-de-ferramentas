import { ColumnDef } from "../SimpleTable";

type Props<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  subRowKey: keyof T;
}

function SubRow<T>({ data, columns, subRowKey }: { data: T; columns: ColumnDef<T>[]; subRowKey: keyof T }) {
  return (
    data[subRowKey] &&
    Array.isArray(data[subRowKey]) &&
    data[subRowKey].map((subitem, subitemIndex) => (
      <>
        <tr key={`subitem_${subitemIndex}`}>
          {
            columns.map(el => (
              <td className="text-center last:text-end text-gray-500 border-b border-gray-300">
                {subitem[el.accessKey]}
              </td>
            ))
          }
        </tr>

        {
          subitem[subRowKey] &&
          Array.isArray(subitem[subRowKey]) &&
          <SubRow data={subitem} columns={columns} subRowKey={subRowKey} />
        }
      </>
    ))
  );
}

export function RecursiveTable<T>({ data, columns, subRowKey }: Props<T>) {
  return (
    <div className="p-2 rounded-lg border border-indigo-700">
      <table className="w-full">
        <thead>
          <tr>
            {
              columns.map((col, index) => (
                <th
                  key={index}
                  className="text-center first:text-start last:text-end"
                >
                  {col.header}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            data.map((row, indexRow) => (
              <>
                <tr key={indexRow}>
                  {
                    columns.map((col, indexCol) => (
                      <td key={`${indexRow}_${indexCol}`} className="text-center first:text-start last:text-end border-b">
                        {row[col.accessKey] as string}
                      </td>
                    ))
                  }
                </tr>

                <SubRow
                  data={row}
                  columns={columns}
                  subRowKey={subRowKey}
                />
              </>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

type THourDetail = { hours: string, details?: Array<THourDetail> };

type TExample = {
  name: string;
  hours: string;
  details?: Array<THourDetail>;
};

const columns: ColumnDef<TExample>[] = [
  { accessKey: 'name', header: 'Nome' },
  { accessKey: 'hours', header: 'Horas' },
];

const data: Array<TExample> = [
  { name: 'Pessoa 1', hours: '01:00' },
  {
    name: 'Pessoa 2',
    hours: '02:00',
    details: [
      { hours: '02:10' }
    ]
  },
  {
    name: 'Pessoa 3',
    hours: '03:00',
    details: [
      { hours: '03:10' },
      {
        hours: '03:20',
        details: [
          { hours: '03:21' },
          { hours: '03:22' },
          { hours: '03:23' },
        ]
      },
      { hours: '03:30' },
    ]
  },
];

export function RecursiveTableExample() {
  return (
    <>
      <RecursiveTable
        data={data}
        columns={columns}
        subRowKey={'details'}
      />

      <div>
        Dados de renderização:
        <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}