import styled from "@emotion/styled";
import { cancel } from "../../styles/commonColor";
import { flexCenter } from "../../styles/FlexCenter";
import { IButtonDeativeProps, ThemeButtonDeative } from "../types/element";

const ButtonWrap = styled.div<ThemeButtonDeative>`
  ${flexCenter}
  flex-direction: column;
  margin-top: 20px;

  button {
    border: 1px solid ${(props) => props.hoverColor};
    border-radius: 4px;
    transition: 0.2s;
    width: 100%;
    padding: 8px 0;
    color: ${(props) => props.color};
    background-color: ${(props) =>
      props.isDeactivation ? `${cancel}` : props.backgroundColor};
    cursor: ${(props) => (props.isDeactivation ? "not-allowed" : "pointer;")};
  }

  button:hover {
    background-color: ${(props) =>
      props.isDeactivation ? `${cancel}` : props.hoverColor};
    color: ${(props) =>
      props.isDeactivation ? props.color : props.backgroundColor};
  }
`;

const ButtonDeativeView = ({
  children,
  isDeactivation,
  color,
  hoverColor,
  backgroundColor,
  onButtonAcitve,
}: IButtonDeativeProps) => {
  return (
    <ButtonWrap
      isDeactivation={isDeactivation}
      color={color}
      hoverColor={hoverColor}
      backgroundColor={backgroundColor}
    >
      <button onClick={onButtonAcitve}>{children}</button>
    </ButtonWrap>
  );
};

export default ButtonDeativeView;
