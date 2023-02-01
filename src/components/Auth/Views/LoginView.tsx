import styled from "@emotion/styled";

import {
  blue,
  warning,
  warningBackground,
} from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { ILoginProps, ThemeFeedback } from "../types/login";

const Login = styled.div<ThemeFeedback>`
  position: relative;
  ${flexCenter}
  flex-direction: column;
  width: 80%;
  max-width: 800px;

  min-height: 450px;
  background-color: #fff;
  border: 1px solid ${blue};
  border-radius: 8px;
  padding: 50px 50px 60px;
  margin-bottom: 24px;

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

  .submitFeedbackMessage {
    display: flex;
    justify-content: center;
    color: ${warning};
    font-size: 14px;
    width: 100%;
    height: 16px;
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

const LoginView = ({
  children,
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
}: ILoginProps) => {
  return (
    <Login
      isFeedbackEmail={isFeedbackEmail}
      isFeedbackPassword={isFeedbackPassword}
      isDeactivation={isFeedbackEmail || isFeedbackPassword}
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
        {children}
      </form>
    </Login>
  );
};

export default LoginView;
