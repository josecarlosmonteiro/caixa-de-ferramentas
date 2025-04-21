'use client';

import { TdHTMLAttributes, useContext } from "react";
import { CollapseRowContext } from "./CollapseRow/CollapseRowProvider";

interface Props extends TdHTMLAttributes<HTMLTableDataCellElement> {
  collapse?: boolean;
}

export function TDataCell({ collapse, className, children, ...rest }: Props) {
  const { showContent, handleShowContent } = useContext(CollapseRowContext);

  return (
    <td
      {...rest}
      className={`border-b border-gray-200 p-2 text-sm text-center last:text-end first:text-start ${className}`}
    >
      {
        collapse ?
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className="w-5 h-5 border border-blue-500 text-blue-500 text-xs rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
              onClick={handleShowContent}
            >
              {showContent ? "-" : "+"}
            </button>
            {children}
          </div>
          :
          children
      }
    </td>
  )
}