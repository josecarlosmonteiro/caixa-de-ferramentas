'use client'

import { HTMLAttributes, useContext } from "react";
import { Table } from "..";
import { CollapseRowContext } from "./CollapseRowProvider";

interface Props extends HTMLAttributes<HTMLTableRowElement> {
  collapsedContent?: React.ReactNode;
}

export function CollapseRow({ collapsedContent, children }: Props) {
  const { showContent } = useContext(CollapseRowContext);

  return (
    <>
      <Table.Row>
        {children}
      </Table.Row>

      {showContent && collapsedContent}
    </>
  )
}