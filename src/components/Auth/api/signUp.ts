import axios from "axios";
import { SignUpAPI } from "../types/signUp";

export const signUpAPI: SignUpAPI = {
  signUp: async (
    signUpInfo,
    moveHomeCb,
    disfatchResetFeedbackCb,
    dispatchExistEmail
  ) => {
    const { email, password } = signUpInfo;

    try {
      await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_AUTH_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
    } catch (error: any) {
      if (error.response.data.error.message === "EMAIL_EXISTS") {
        dispatchExistEmail();
      }
      return;
    }
    window.alert("회원가입을 축하합니다 🎉");
    moveHomeCb();
    disfatchResetFeedbackCb();
  },
};
