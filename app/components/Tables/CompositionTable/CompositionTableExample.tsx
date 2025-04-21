import { Table } from '.';
import { currency } from '@/app/utils/formats/currency';
import tableData from './tableData.json';

interface HourInformation {
  hoursAndMinutes: string;
  hourValue: number;
  subtotal: number;
}

export function CompositionTableExample() {
  const headers = ["Projeto", "Especialidade", "Horas", "Valor Hora", "Subtotal", "Adicional/Extra", "Descontos", "Produtividade", "Total"]

  const renderCollapseData = (hoursInformation: HourInformation[]) => hoursInformation.map((hourInfo: HourInformation) => (
    <Table.Row className='border-b border-gray-400'>
      <Table.Cell className='!border-0'></Table.Cell>
      <Table.Cell></Table.Cell>
      <Table.Cell>{hourInfo.hoursAndMinutes}</Table.Cell>
      <Table.Cell>{currency(hourInfo.hourValue)}</Table.Cell>
      <Table.Cell colSpan={5}>{currency(hourInfo.subtotal)}</Table.Cell>
    </Table.Row>
  ));

  return (
    <div className='flex flex-col gap-4'>
      <Table.Root>
        <Table.Head>
          <Table.Row>
            {
              headers.map((header, index) => (
                <Table.HeadCell key={index}>
                  {header}
                </Table.HeadCell>
              ))
            }
          </Table.Row>
        </Table.Head>

        <tbody>
          <tr>
            <td colSpan={9} className='border-b-2 border-gray-300'></td>
          </tr>
        </tbody>

        <Table.Body>
          {
            tableData.content.items.map((origin) => (
              <>
                {origin.spacialties.map((specialty, specialtyIndex) => (
                  <Table.CollapseRow
                    collapsedContent={renderCollapseData(specialty.hoursInformation)}
                  >
                    <Table.Cell className='font-semibold !border-0'>{specialtyIndex === 0 && origin.origin}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold' collapse>
                      {specialty.specialty}
                    </Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold'>{specialty.hours}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold'></Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold text-end'>{currency(specialty.subtotal)}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold text-end'>{currency(specialty.additionalExtra)}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold text-end'>{specialty.discounts || ""}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold text-end'>{currency(specialty.productivity)}</Table.Cell>
                    <Table.Cell className='bg-gray-200 font-semibold text-end'>{currency(specialty.value)}</Table.Cell>
                  </Table.CollapseRow>
                ))}

                <Table.Row>
                  <Table.Cell colSpan={9}>
                    <div className='flex justify-end items-center gap-10 font-semibold'>
                      <div className='flex items-center gap-4'>
                        <span className='text-blue-400'>Status:</span>
                        <div className='p-1 px-4 rounded-full bg-green-200 text-green-700 font-normal'>teste</div>
                      </div>

                      <div className='flex items-center gap-4'>
                        <span className='text-blue-400'>Total origem:</span>
                        <div className='p-1 px-4 pr-2 rounded-full'>{currency(origin.originTotal)}</div>
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </>
            ))
          }
        </Table.Body>
      </Table.Root>

      <pre className='text-xs'>
        {JSON.stringify(tableData, null, 2)}
      </pre>
    </div>
  )
}