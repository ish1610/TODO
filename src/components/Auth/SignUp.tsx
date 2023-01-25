import { useState } from "react";
import { emailValidator, passwordValidator } from "../Common/Util/validation";

import { IJoinInProps } from "./types/join";
import JoinInView from "./Views/SignUpView";

const JoinIn = () => {
  const [joinInputValues, setJoinInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const isEmailVaild = emailValidator(joinInputValues.email);
  const isPasswordVaild = passwordValidator(joinInputValues.password);
  const isPasswordConfirmVaild =
    joinInputValues.password === joinInputValues.passwordConfirm;
  const isDisabledJoinIn = [
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
  ].every((boolean) => !!boolean);

  //
  const handleSubmitJoin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("회원가입");
  };

  const joinInProps: IJoinInProps = {
    isEmailVaild,
    isPasswordVaild,
    isPasswordConfirmVaild,
    isDisabledJoinIn: !isDisabledJoinIn,
    joinInputValues,
    onSubmitJoin: (e) => handleSubmitJoin(e),
    onChangeEmailValue: (e) =>
      setJoinInputValues((prev) => {
        return { ...prev, email: e.target.value };
      }),
    onChangePassworeValue: (e) =>
      setJoinInputValues((prev) => {
        return { ...prev, password: e.target.value };
      }),
    onChangepasswordConfirmValue: (e) =>
      setJoinInputValues((prev) => {
        return { ...prev, passwordConfirm: e.target.value };
      }),
  };
  return <JoinInView {...joinInProps} />;
};

export default JoinIn;
