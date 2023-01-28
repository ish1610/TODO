import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
  feedbackMessage: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    notFoundEmail: (state) => {
      state.feedbackMessage = "존재하지 않는 이메일입니다.";
    },
    invalidPassword: (state) => {
      state.feedbackMessage = "유효하지 않은 비밀번호입니다.";
    },
    resetFeedback: (state) => {
      state.feedbackMessage = "";
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
