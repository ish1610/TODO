export type joinInputValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface IJoinInProps {
  isEmailVaild: boolean;
  isPasswordVaild: boolean;
  isPasswordConfirmVaild: boolean;
  joinInputValues: joinInputValues;
  isDisabledJoinIn: boolean;
  onChangeEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassworeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangepasswordConfirmValue: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSubmitJoin: (e: React.FormEvent<HTMLFormElement>) => void;
}
