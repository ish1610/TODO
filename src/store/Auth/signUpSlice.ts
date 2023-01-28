import { createSlice } from "@reduxjs/toolkit";

const initialSignUpState = {
  feedbackMessage: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    EMAIL_EXISTS: (state) => {
      state.feedbackMessage =
        "이미 존재하는 이메일 입니다. 새로운 이메일을 입력해주세요.";
    },
  },
});

export const signUpAction = signUpSlice.actions;
export default signUpSlice.reducer;
