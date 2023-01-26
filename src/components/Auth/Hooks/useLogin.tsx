import { useState } from "react";
import { InputValidator } from "../../Common/types/validation";

const useLogin = (validateFn: InputValidator) => {
  const [inputState, setInputState] = useState({ value: "", isTouched: false });

  const valueIsValid = validateFn(inputState.value);
  const isFeedback = inputState.isTouched && !valueIsValid;

  const handleChangedValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ value: event.target.value, isTouched: true });
  };

  const handleInputBlured = () => {
    setInputState((prev) => ({ ...prev, isTouched: true }));
  };

  const resetInputState = () => {
    setInputState({ value: "", isTouched: false });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    isFeedback,
    handleChangedValue,
    handleInputBlured,
    resetInputState,
  };
};

export default useLogin;
