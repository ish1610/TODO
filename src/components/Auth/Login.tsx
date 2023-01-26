import { useNavigate } from "react-router-dom";
import { ILoginProps } from "./types/login";
import LoginView from "./Views/LoginView";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(132);
  };

  const handleMoveSignUp = () => {
    navigate("/signup");
  };

  const loginProps: ILoginProps = {
    onSubmitLogin: (e) => handleSubmitLogin(e),
    onMoveSignUp: () => handleMoveSignUp(),
  };

  return <LoginView {...loginProps} />;
};

export default Login;
