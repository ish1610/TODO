import React from "react";
import { IButtonDeativeProps } from "./types/element";
import ButtonDeativeView from "./View/ButtonDeativeView";

const ButtonDeative = ({
  children,
  ...buttonDeativeProps
}: IButtonDeativeProps) => {
  return (
    <ButtonDeativeView {...buttonDeativeProps}>{children}</ButtonDeativeView>
  );
};

export default ButtonDeative;
