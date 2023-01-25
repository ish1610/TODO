import { useState } from "react";
import { emailValidator, passwordValidator } from "../Common/Util/validation";
import { signUpAPI } from "./api/signUp";

import { ISignUpProps } from "./types/signUp";
import SignUpView from "./Views/SignUpView";

const SignUp = () => {
  const [signUpInputValues, setSignUpInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isEmailVaild = emailValidator(signUpInputValues.email);
  const isPasswordVaild = passwordValidator(signUpInputValues.password);
  const isPasswordConfirmVaild =
    signUpInputValues.password === signUpInputValues.passwordConfirm;
  const isDisabledJoinIn = [
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
  ].every((boolean) => !!boolean);

  const handleSubmitSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpAPI.signUp(signUpInputValues);
  };

  const signUpProps: ISignUpProps = {
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
    isDisabledJoinIn: !isDisabledJoinIn,
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
  return <SignUpView {...signUpProps} />;
};

export default SignUp;
