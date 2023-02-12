import { createSlice } from "@reduxjs/toolkit";
import { Store } from "../../../../store/types/store";
import { SignUpSliceState } from "../Types/signUp";

const initialSignUpState: SignUpSliceState = {
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

export const { existEmail, reset } = signUpSlice.actions;

export const selectSignUpFeedbackMessage = (state: Store) =>
  state.signUp.feedbackMessage;

export default signUpSlice.reducer;
