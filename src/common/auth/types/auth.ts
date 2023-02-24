import React from "react";

export interface IAuthContainerProps {
  children: React.ReactNode;
  onMove: () => void;
  moveText: string;
}
