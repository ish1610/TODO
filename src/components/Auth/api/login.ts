import axios from "axios";

export const loginAPI = {
  login: async (
    email: string,
    password: string,
    onMoveHomeCb: () => void,
    dispatchNotFoundEmailCb: () => void,
    dispatchInvalidPasswordCb: () => void,
    resetEmailInputStateCb: () => void,
    resetPasswordInputStateCb: () => void
  ) => {
    let token: string;
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_AUTH_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );

      token = response.data.idToken;
    } catch (error: any) {
      console.log(error.response.data.error.message);
      if (error.response.data.error.message === "EMAIL_NOT_FOUND") {
        dispatchNotFoundEmailCb();
      } else if (error.response.data.error.message === "INVALID_PASSWORD") {
        dispatchInvalidPasswordCb();
      }

      return;
    }

    localStorage.setItem("token", token);
    onMoveHomeCb();
    resetEmailInputStateCb();
    resetPasswordInputStateCb();
  },
};
