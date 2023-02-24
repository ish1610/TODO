import { IButtonDeativeProps } from "../types/element";
import ButtonDeativeView from "./views/ButtonDeativeView";

const ButtonDeative = ({
  children,
  ...buttonDeativeProps
}: IButtonDeativeProps) => {
  return (
    <ButtonDeativeView {...buttonDeativeProps}>{children}</ButtonDeativeView>
  );
};

export default ButtonDeative;
