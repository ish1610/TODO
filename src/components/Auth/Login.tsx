import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../store/Auth/loginSlice";
import { Store } from "../../store/types/store";
import { emailValidator, passwordValidator } from "../Common/Util/validation";
import { loginAPI } from "./api/login";
import useLogin from "./Hooks/useLogin";
import { ILoginProps } from "./types/login";
import LoginView from "./Views/LoginView";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feedbackMessage = useSelector(
    (state: Store) => state.login.feedbackMessage
  );

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

  const handleMoveSignUp = () => {
    navigate("/signup");
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const dispatchNotFoundEmail = () => dispatch(loginAction.notFoundEmail());
  const dispatchInvalidPassword = () => dispatch(loginAction.invalidPassword());

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      loginAPI.login(
        emailValue,
        passwordValue,
        handleMoveHome,
        dispatchNotFoundEmail,
        dispatchInvalidPassword,
        resetEmailInputState,
        resetPasswordInputState
      );
    }
  };

  const loginProps: ILoginProps = {
    feedbackMessage,
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
