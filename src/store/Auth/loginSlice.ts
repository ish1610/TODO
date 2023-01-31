import { createSlice } from "@reduxjs/toolkit";
import { retrieveStoredToken } from "../../components/Auth/utils/token";
import { LoginState } from "../types/store";

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

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
