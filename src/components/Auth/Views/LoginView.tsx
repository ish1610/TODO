import styled from "@emotion/styled";
import backdrop from "../../../assets/images/homeBackground.png";
import {
  blue,
  warning,
  warningBackground,
} from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { ILoginProps, ThemeFeedback } from "../types/login";

const LoginWrap = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 750px;
  padding: 50px 36px 180px;
  min-width: 450px;
  ${flexCenter}
  flex-direction: column;

  ::before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    background-image: url(${backdrop});
    background-size: 50px;
    opacity: 0.05;
    content: "";
  }

  @media (max-width: 750px) {
    padding: 120px 10px 180px;
  }
`;

const Login = styled.div<ThemeFeedback>`
  position: relative;
  ${flexCenter}
  flex-direction: column;
  width: 80%;
  max-width: 800px;

  min-height: 500px;
  background-color: #fff;
  border: 1px solid ${blue};
  border-radius: 8px;
  padding: 50px 50px 60px;
  margin-bottom: 24px;
  margin-top: 20px;

  header {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  form {
    width: 80%;
  }

  .inputWrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-size: 14px;
    margin-bottom: 14px;
    color: #333;
  }

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 16px;
  }
  input::placeholder {
    font-size: 14px;
    color: #ccc;
  }

  input[name="email"] {
    border-color: ${(props) => (props.isFeedbackEmail ? `${warning}` : "#ccc")};
    background-color: ${(props) =>
      props.isFeedbackEmail ? `${warningBackground}` : "transparent"};
  }
  input[name="password"] {
    border-color: ${(props) =>
      props.isFeedbackPassword ? `${warning}` : "#ccc"};
    background-color: ${(props) =>
      props.isFeedbackPassword ? `${warningBackground}` : "transparent"};
  }

  .feedbackMsg {
    font-size: 14px;
    margin-top: 20px;
    color: ${warning};
  }

  .emailFeedbackMsg {
    visibility: ${(props) => (props.isFeedbackEmail ? "visible" : "hidden")};
  }
  .passwordFeedbackMsg {
    visibility: ${(props) => (props.isFeedbackPassword ? "visible" : "hidden")};
  }

  .loginControlWrap {
    ${flexCenter}
    flex-direction: column;
    margin-top: 20px;
  }

  .submitFeedbackMessage {
    display: flex;
    justify-content: center;
    color: ${warning};
    font-size: 14px;
  }

  .login {
    border: 1px solid ${blue};
    border-radius: 4px;
    background-color: #fff;
    transition: 0.2s;
    width: 100%;
    padding: 8px 0;
    color: #333;
  }
  .login:hover {
    background-color: ${blue};
    color: #fff;
  }

  @media (max-width: 750px) {
    width: 90%;

    header {
      font-size: 20px;
    }

    form {
      width: 100%;
    }
  }
`;

const SignUp = styled.div`
  position: relative;
  .signUp {
    width: 100%;
    color: #777;
  }

  .signUp:hover {
    color: #333;
  }
`;

const LoginView = ({
  feedbackMessage,
  emailValue,
  passwordValue,
  isFeedbackEmail,
  isFeedbackPassword,
  onBluredEmail,
  onBluredPassword,
  onChangedEmail,
  onChangedPassword,
  onSubmitLogin,
  onMoveSignUp,
}: ILoginProps) => {
  return (
    <LoginWrap>
      <Login
        isFeedbackEmail={isFeedbackEmail}
        isFeedbackPassword={isFeedbackPassword}
      >
        <header>로그인</header>
        <form onSubmit={onSubmitLogin}>
          <div className="inputWrap">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="example@email.com"
              value={emailValue}
              onChange={onChangedEmail}
              onBlur={onBluredEmail}
            />
            <p className="feedbackMsg emailFeedbackMsg">
              이메일은 @과 . 이 포함된 8자리 이상을 입렵해주세요.
            </p>
          </div>

          <div className="inputWrap">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={passwordValue}
              onChange={onChangedPassword}
              onBlur={onBluredPassword}
            />

            <p className="feedbackMsg passwordFeedbackMsg">
              비밀번호는 영문, 특수문자, 숫자 조합의 8~20자리를 입력해주세요.
            </p>
          </div>

          <p className="submitFeedbackMessage">{feedbackMessage}</p>

          <div className="loginControlWrap">
            <button className="login" type="submit">
              로그인
            </button>
          </div>
        </form>
      </Login>

      <SignUp>
        <button className="signUp" onClick={onMoveSignUp}>
          회원가입
        </button>
      </SignUp>
    </LoginWrap>
  );
};

export default LoginView;
