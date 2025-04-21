import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTableSectionElement> { }

export function TBody({ className, ...rest }: Props) {
  return (
    <tbody
      {...rest}
      className={`${className}`}
    />
  )
}