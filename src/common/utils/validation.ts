import { InputValidator } from "../types/validation";

export const emailValidator: InputValidator = (value) => {
  if (value.length < 8) {
    return false;
  }
  const emailExp = /[\w]+@[\w]+\.[a-zA-Z]+/;

  return emailExp.test(value);
};

export const passwordValidator: InputValidator = (value) => {
  const passwordExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,20}/;

  return passwordExp.test(value);
};
