import { RecursiveTableExample } from "@/app/components/Tables/RecursiveTable";
import { TableExample } from "@/app/components/Tables/SimpleTable";
import { TableSubItemExample } from "@/app/components/Tables/TableSubitem";
import { Section } from "@/app/components/UI/Section";

export default function TablesPage() {
  return (
    <div className="flex flex-col gap-4">
      <Section title="Tabela Comum">
        <TableExample />
      </Section>

      <Section title="Tabela com sub-itens">
        <TableSubItemExample />
      </Section>

      <Section title="Tabela Recursiva">
        <RecursiveTableExample />
      </Section>
    </div>
  )
}