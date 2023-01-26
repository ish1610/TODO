import React from "react";

export interface ILoginProps {
  onSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  onMoveSignUp: () => void;
  onChangedEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangedPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBluredEmail: () => void;
  onBluredPassword: () => void;
  emailValue: string;
  passwordValue: string;
  isFeedbackEmail: boolean;
  isFeedbackPassword: boolean;
}

export type ThemeFeedback = {
  isFeedbackEmail: boolean;
  isFeedbackPassword: boolean;
};
