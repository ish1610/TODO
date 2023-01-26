import { useNavigate } from "react-router-dom";
import { emailValidator, passwordValidator } from "../Common/Util/validation";
import useLogin from "./Hooks/useLogin";
import { ILoginProps } from "./types/login";
import LoginView from "./Views/LoginView";

const Login = () => {
  const navigate = useNavigate();

  const {
    value: emailValue,
    isValid: isEmailValid,
    isFeedback: isFeedbackEmail,
    handleChangedValue: handleChangedEmail,
    handleInputBlured: handleEmailInputBlured,
    resetInputState: resetEmailInputState,
  } = useLogin(emailValidator);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    isFeedback: isFeedbackPassword,
    handleChangedValue: handleChangedPassword,
    handleInputBlured: handlePasswordInputBlured,
    resetInputState: resetPasswordInputState,
  } = useLogin(passwordValidator);

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      handleMoveHome();
    }

    resetEmailInputState();
    resetPasswordInputState();
  };

  const handleMoveSignUp = () => {
    navigate("/signup");
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const loginProps: ILoginProps = {
    emailValue,
    passwordValue,
    isFeedbackEmail,
    isFeedbackPassword,
    onBluredEmail: () => handleEmailInputBlured(),
    onBluredPassword: () => handlePasswordInputBlured(),
    onChangedEmail: handleChangedEmail,
    onChangedPassword: handleChangedPassword,
    onSubmitLogin: (e) => handleSubmitLogin(e),
    onMoveSignUp: () => handleMoveSignUp(),
  };

  return <LoginView {...loginProps} />;
};

export default Login;
