import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { signUpAction } from "../../../store/Auth/signUpSlice";
import { SignUpInfoValues } from "../types/signUp";

export const signUpAPI = {
  signUp: async (
    signUpInfo: SignUpInfoValues,
    moveHomeCb: NavigateFunction,
    disfatchCb: Dispatch<AnyAction>
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
        disfatchCb(signUpAction.existEmail());
      }
      return;
    }
    window.alert("회원가입을 축하합니다 🎉");
    moveHomeCb("/");
    disfatchCb(signUpAction.reset());
  },
};
