import React from "react";

export interface ILoginProps {
  onSubmitLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangedEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangedPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBluredEmail: () => void;
  onBluredPassword: () => void;
  emailValue: string;
  passwordValue: string;
  isFeedbackEmail: boolean;
  isFeedbackPassword: boolean;
  feedbackMessage: string;
  children?: React.ReactNode;
}

export type ThemeFeedback = {
  isFeedbackEmail: boolean;
  isFeedbackPassword: boolean;
  isDeactivation: boolean;
};

export type LoginState = {
  isLogin: boolean;
  feedbackMessage: string;
  tokenData: { token: string; duration: number };
};
