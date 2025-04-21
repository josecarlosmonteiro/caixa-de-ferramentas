'use client';

import { createContext, useState } from "react";

export type TCollapseRowContext = {
  showContent: boolean;
  handleShowContent: VoidFunction;
  handleCloseContent: VoidFunction;
};

export const CollapseRowContext = createContext({} as TCollapseRowContext);

export function CollapseRowProvider({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleShowContent = () => setShowContent(state => !state);
  const handleCloseContent = () => setShowContent(false);

  const context: TCollapseRowContext = {
    showContent,
    handleShowContent,
    handleCloseContent,
  };

  return (
    <CollapseRowContext.Provider value={context}>
      {children}
    </CollapseRowContext.Provider>
  );
}