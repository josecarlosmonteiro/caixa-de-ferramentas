'use client';

import { HTMLAttributes } from "react";
import { CollapseRow } from "./CollapseRow";
import { CollapseRowProvider } from "./CollapseRowProvider";

interface Props extends HTMLAttributes<HTMLTableRowElement> {
  collapsedContent?: React.ReactNode;
}

export function CollapseRowRoot({ children, collapsedContent }: Props) {
  return (
    <CollapseRowProvider>
      <CollapseRow collapsedContent={collapsedContent}>
        {children}
      </CollapseRow>
    </CollapseRowProvider>
  )
}