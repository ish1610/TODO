export type joinInputValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface IJoinInProps {
  joinInputValues: joinInputValues;
  onChangeEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassworeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangepasswordConfirmValue: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
