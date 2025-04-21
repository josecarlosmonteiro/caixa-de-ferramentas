export function currency(value?: string | number) {
  if (!value) return;
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}