import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpAction } from "../../store/Auth/signUpSlice";
import { Store } from "../../store/types/store";
import AuthContainer from "../Common/Auth/AuthContainer";
import ButtonDeative from "../Common/Element/ButtonDeative";
import { lightOrange } from "../Common/styles/commonColor";
import { emailValidator, passwordValidator } from "../Common/Util/validation";
import { signUpAPI } from "./api/signUp";

import { ISignUpProps } from "./types/signUp";
import SignUpView from "./Views/SignUpView";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpFeedbackMessage = useSelector(
    (state: Store) => state.signUp.feedbackMessage
  );

  const [signUpInputValues, setSignUpInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isEmailVaild = emailValidator(signUpInputValues.email);
  const isPasswordVaild = passwordValidator(signUpInputValues.password);
  const isPasswordConfirmVaild =
    signUpInputValues.password === signUpInputValues.passwordConfirm;
  const isDeactiveSignUp = [
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
  ].every((boolean) => !!boolean);

  const handleMoveHome = () => {
    navigate("/", { replace: true });
  };

  const handleMoveLogin = () => {
    navigate("/login", { replace: true });
  };

  const dispatchResetFeedback = useCallback(() => {
    dispatch(signUpAction.reset());
  }, [dispatch]);

  const dispatchExistEmail = () => {
    dispatch(signUpAction.existEmail());
  };

  const handleSubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpAPI.signUp(signUpInputValues).then((response) => {
      if (response) {
        switch (response) {
          case "SUCCESS_SIGNUP": {
            window.alert("회원가입을 축하합니다 🎉");
            handleMoveHome();
            dispatchResetFeedback();
            break;
          }
          case "EMAIL_EXISTS": {
            dispatchExistEmail();
          }
        }
      }
    });
  };

  const signUpProps: ISignUpProps = {
    signUpFeedbackMessage,
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
    signUpInputValues,
    onSubmitSignUp: (e) => handleSubmitSignUp(e),
    onChangeEmailValue: (e) =>
      setSignUpInputValues((prev) => {
        return { ...prev, email: e.target.value };
      }),
    onChangePassworeValue: (e) =>
      setSignUpInputValues((prev) => {
        return { ...prev, password: e.target.value };
      }),
    onChangepasswordConfirmValue: (e) =>
      setSignUpInputValues((prev) => {
        return { ...prev, passwordConfirm: e.target.value };
      }),
  };

  useEffect(() => {
    dispatchResetFeedback();
  }, [dispatchResetFeedback]);

  const authContainerProps = {
    onMove: () => handleMoveLogin(),
    moveText: "로그인하러 갈래요!",
  };

  const buttonDeativeProps = {
    isDeactivation: !isDeactiveSignUp,
    color: "#333",
    hoverColor: lightOrange,
    backgroundColor: "#fff",
    isSubmit: true,
  };
  return (
    <AuthContainer {...authContainerProps}>
      <SignUpView {...signUpProps}>
        <ButtonDeative {...buttonDeativeProps}>회원가입</ButtonDeative>
      </SignUpView>
    </AuthContainer>
  );
};

export default SignUp;
