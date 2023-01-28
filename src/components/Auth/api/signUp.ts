import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { signUpInfoValues } from "../types/signUp";

export const signUpAPI = {
  signUp: async (
    signUpInfo: signUpInfoValues,
    moveHomeCb: NavigateFunction
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
      console.log(error.response.data.error.message);

      return;
    }
    window.alert("회원가입을 축하합니다 🎉");
    moveHomeCb("/");
  },
};
