import axios from "axios";
import { LoginAPI } from "../types/login";
import { calculateRemainingTime } from "../utils/token";

let logoutTimer: NodeJS.Timeout;

export const loginAPI: LoginAPI = {
  login: async (email, password, dispatchLogoutCb) => {
    let token: string;
    let expirationTime: string;
    let uId: string;
    try {
      const { data, status } = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.REACT_APP_FIREBASE_AUTH_API_KEY,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
      if (status >= 200 && status < 300) {
        // 토큰 만료 시각
        expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        ).toISOString();

        token = data.idToken;
        uId = data.localId;

        const remainingTime = calculateRemainingTime(expirationTime);
        localStorage.setItem("token", token);
        localStorage.setItem("expirationTime", expirationTime);
        localStorage.setItem("uId", uId);
        // 만료 시간 지나면 자동 로그아웃
        logoutTimer = setTimeout(() => {
          loginAPI.logout(dispatchLogoutCb);
        }, remainingTime);

        return "SUCCESS_LOGIN";
      }
    } catch (error: any) {
      if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
        return "EMAIL_NOT_FOUND";
      } else if (error.response.data.error.message === "INVALID_PASSWORD") {
        return "INVALID_PASSWORD";
      }
    }
  },
  logout: (dispatchLogoutCb) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("uId");

    dispatchLogoutCb();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  },
};
