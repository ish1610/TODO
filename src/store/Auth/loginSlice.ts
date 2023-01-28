import { createSlice } from "@reduxjs/toolkit";
import { retrieveStoredToken } from "../../components/Auth/utils/token";

const initialLoginState = {
  isLogin: false,
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
      const storedtoken = retrieveStoredToken();
      state.isLogin = true;
      // if (storedtoken?.token && storedtoken?.duration) {
      //   state.tokenData = storedtoken;
      // }
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
