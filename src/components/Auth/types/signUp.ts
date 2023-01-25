export type signUpInputValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface ISignUpProps {
  isEmailVaild: boolean;
  isPasswordVaild: boolean;
  isPasswordConfirmVaild: boolean;
  signUpInputValues: signUpInputValues;
  isDisabledJoinIn: boolean;
  onChangeEmailValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassworeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangepasswordConfirmValue: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onSubmitJoin: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type signUpInfoValues = Pick<signUpInputValues, "email" | "password">;
