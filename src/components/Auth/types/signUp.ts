export type signUpInputValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export interface ISignUpProps {
  signUpFeedbackMessage: string;
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
  onSubmitSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
  onMoveLogin: () => void;
}

export type SignUpInfoValues = Pick<signUpInputValues, "email" | "password">;
export type MoveHomeCb = (route: string) => void;

export type SignUpState = {
  feedbackMessage: string;
};
