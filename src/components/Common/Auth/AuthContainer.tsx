import { IAuthContainerProps } from "./types/auth";
import AuthContainerView from "./View/AuthContainerView";

const AuthContainer = ({ children, onMove, moveText }: IAuthContainerProps) => {
  return (
    <AuthContainerView
      children={children}
      onMove={onMove}
      moveText={moveText}
    />
  );
};

export default AuthContainer;
