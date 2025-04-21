import { CompositionTableExample } from "@/app/components/Tables/CompositionTable/CompositionTableExample";
import { TableExample } from "@/app/components/Tables/SimpleTable";
import { TableSubItemExample } from "@/app/components/Tables/TableSubitem";
import { Section } from "@/app/components/UI/Section";

export default function TablesPage() {
  return (
    <div className="flex flex-col gap-4">
      <Section title="Tabela Simples">
        <TableExample />
      </Section>

      <Section title="Tabela com Sub-Itens">
        <TableSubItemExample />
      </Section>

      <Section title="Tabela de Composição - (sub-itens, expansível)">
        <CompositionTableExample />
      </Section>
    </div>
  )
}