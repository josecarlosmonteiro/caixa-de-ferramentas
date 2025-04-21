import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLTableSectionElement> { }

export function THead({ className, ...rest }: Props) {
  return (
    <thead
      {...rest}
      className={`p-4 text-sm last:text-end first:text-start text-center text-blue-500 ${className}`} />
  )
}