import { createSlice } from "@reduxjs/toolkit";
import { retrieveStoredToken } from "../Utils/token";
import { LoginState, Store } from "../../../../store/types/store";

const initialLoginState: LoginState = {
  isLogin: !!retrieveStoredToken(),
  feedbackMessage: "",
  tokenData: {
    token: "",
    duration: 0,
  },
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

export const { login, logout, notFoundEmail, invalidPassword, resetFeedback } =
  loginSlice.actions;

export const selectIsLogin = (state: Store) => state.login.isLogin;
export const selectLoginFeedbackMessage = (state: Store) =>
  state.login.feedbackMessage;
export const selectLoginTokenData = (state: Store) => state.login.tokenData;

export default loginSlice.reducer;
