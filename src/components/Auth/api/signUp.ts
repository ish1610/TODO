import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { signUpInfoValues } from "../types/signUp";

export const signUpAPI = {
  signUp: (signUpInfo: signUpInfoValues, moveHomeCb: NavigateFunction) => {
    const newSignUpInfo = {
      email: signUpInfo.email,
      password: signUpInfo.password,
    };

    axios
      .patch(
        `https://preonboardingtodo-default-rtdb.firebaseio.com/user.json`,
        newSignUpInfo
      )
      .then(() => {
        window.alert("회원가입을 축하합니다 🎉");
        moveHomeCb("/");
      })
      .catch((error) => {
        console.log(`🚨 SignUpAPI : ${error.message}`);
      });
  },
};
