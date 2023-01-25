export const emailValidator = (value: string) => {
  if (value.length < 8) {
    return false;
  }
  const emailExp = /[\w+]@[\w+].[a-zA-Z+]/;

  return emailExp.test(value);
};

export const passwordValidator = (value: string) => {
  const passwordExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{8,20}/;

  return passwordExp.test(value);
};
