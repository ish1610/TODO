import axios from "axios";
import { SignUpAPI } from "../types/signUp";

export const signUpAPI: SignUpAPI = {
  signUp: async (signUpInfo) => {
    const { email, password } = signUpInfo;

    try {
      const { status } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_AUTH_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      if (status >= 200 && status < 300) {
        return "SUCCESS_SIGNUP";
      }
    } catch (error: any) {
      if (error.response.data.error.message === "EMAIL_EXISTS") {
        return "EMAIL_EXISTS";
      }
      return;
    }
  },
};
