import { useState } from "react";
import { IJoinInProps } from "./types/join";
import JoinInView from "./Views/JoinInView";

const JoinIn = () => {
  const [joinInputValues, setJoinInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const joinInProps: IJoinInProps = {
    joinInputValues,
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
