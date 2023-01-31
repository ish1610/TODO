import { createSlice } from "@reduxjs/toolkit";
import { SignUpState } from "../types/store";

const initialSignUpState: SignUpState = {
  feedbackMessage: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    existEmail: (state) => {
      state.feedbackMessage =
        "이미 존재하는 이메일 입니다. 새로운 이메일을 입력해주세요.";
    },
    reset(state) {
      state.feedbackMessage = "";
    },
  },
});

export const signUpAction = signUpSlice.actions;
export default signUpSlice.reducer;
