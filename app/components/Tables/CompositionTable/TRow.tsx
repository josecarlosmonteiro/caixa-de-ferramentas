import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTableRowElement> { }

export function TRow({ className, ...rest }: Props) {
  return (
    <tr
      className={`text-sm border-b-2 border-gray-300 ${className}`}
      {...rest}
    />
  )
}