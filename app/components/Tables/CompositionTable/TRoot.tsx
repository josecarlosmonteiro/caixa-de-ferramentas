import { TableHTMLAttributes } from "react";

interface Props extends TableHTMLAttributes<HTMLTableElement> { };

export function TRoot({ className, ...rest }: Props) {
  return (
    <div className="w-full p-2 rounded-lg bg-gray-50 overflow-auto">
      <table
        {...rest}
        className={`w-full border-separate border-spacing-y-2 truncate rounded-lg p-1 text-sm ${className}`}
      />
    </div>
  )
}