import { TBody } from "./TBody";
import { THead } from "./THead";

export type ColumnDef<T> = {
  accessKey: keyof T;
  header?: string;
}

type Props<T> = {
  columns: ColumnDef<T>[];
  data: T[];
}

export function Table<T>({ columns, data }: Props<T>) {
  return (
    <div className="w-full overflow-auto border rounded-lg border-indigo-500">
      <table className="w-full table p-2">
        <THead columns={columns} />

        <TBody data={data} columns={columns} />
      </table>
    </div>
  )
}

export function TableExample() {
  type TTableExample = {
    name: string;
    description: string;
    value: number;
  }

  const exempleColumns: ColumnDef<TTableExample>[] = [
    { accessKey: 'name', header: "Nome" },
    { accessKey: 'description', header: "Descrição" },
    { accessKey: 'value', header: "Valor" },
  ];

  const tableData: TTableExample[] = [
    { name: 'Exemplo 1', description: 'Descrição de exemplo 1', value: 100 },
    { name: 'Exemplo 2', description: 'Descrição de exemplo 2', value: 200 },
    { name: 'Exemplo 3', description: 'Descrição de exemplo 3', value: 300 },
    { name: 'Exemplo 4', description: 'Descrição de exemplo 4', value: 400 },
    { name: 'Exemplo 5', description: 'Descrição de exemplo 5', value: 500 },
  ];

  return (
    <>
      <Table
        columns={exempleColumns}
        data={tableData}
      />

      <div>
        Dados passados para renderização:
        <pre className="text-xs">{JSON.stringify(tableData, null, 2)}</pre>
      </div>
    </>
  )
}