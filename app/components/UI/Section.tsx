type Props = {
  title?: string;
  children?: React.ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="p-4 flex flex-col gap-4 rounded shadow bg-indigo-100">
      <h2 className="text-lg">{title}</h2>

      {children}
    </section>
  )
}