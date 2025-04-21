import { CompositionTableExample } from "@/app/components/Tables/CompositionTable/CompositionTableExample";
import { Section } from "@/app/components/UI/Section";

export default function TablesPage() {
  return (
    <div className="flex flex-col gap-4">
      <Section title="Tabela de Composição">
        <CompositionTableExample />
      </Section>
    </div>
  )
}