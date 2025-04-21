import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTableCellElement> { }

export function THeadCell({ className, ...rest }: Props) {
  return (
    <th
      {...rest}
      className={`border-gray-300 p-0 px-4 text-center not-first:border-l-2 ${className}`}
    />
  )
}