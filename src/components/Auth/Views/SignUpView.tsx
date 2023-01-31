import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { blue, lightOrange, warning } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { ISignUpProps } from "../types/signUp";

const SignUp = styled.div`
  ${flexCenter}
  position: relative;
  width: 100%;
  height: 608px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 30px 50px 60px;

  border: 1px solid ${blue};
  border-radius: 8px;
  background-color: #fff;

  header {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputWrap {
    width: 100%;
    margin-bottom: 40px;
  }

  .feedbackMessage {
    font-size: 14px;
    color: ${warning};
    display: flex;
    justify-content: center;
    width: 100%;
    height: 16px;
  }

  @media (max-width: 750px) {
    width: 90%;
    padding: 30px 0px 60px;
    header {
      font-size: 20px;
      margin-bottom: 20px;
    }

    form {
      width: 100%;
    }

    .inputWrap {
      display: flex;
      width: 80%;
    }
  }
`;

const SignUpView = ({
  signUpFeedbackMessage,
  isEmailVaild,
  isPasswordVaild,
  isPasswordConfirmVaild,
  signUpInputValues,
  onChangeEmailValue,
  onChangePassworeValue,
  onChangepasswordConfirmValue,
  onSubmitSignUp,
  children,
}: ISignUpProps) => {
  const { email, password, passwordConfirm } = signUpInputValues;
  return (
    <SignUp>
      <header>회원가입</header>
      <form onSubmit={onSubmitSignUp}>
        <div className="inputWrap">
          <TextField
            label="Email"
            variant="standard"
            autoFocus
            fullWidth={true}
            placeholder="example@example.com"
            margin="dense"
            color="warning"
            value={email}
            onChange={onChangeEmailValue}
            error={!isEmailVaild}
            helperText={`${
              !isEmailVaild
                ? "이메일은 @ 형식의 8자리 이상을 입렵해주세요."
                : ""
            } `}
          />
        </div>

        <div className="inputWrap">
          <TextField
            label="Password"
            variant="standard"
            fullWidth={true}
            placeholder="비밀번호를 입력해주세요"
            margin="dense"
            color="warning"
            value={password}
            onChange={onChangePassworeValue}
            type="password"
            error={!isPasswordVaild}
            helperText={`${
              !isPasswordVaild
                ? "비밀번호는 영문, 특수문자, 숫자 조합의 8~20자리를 입력해주세요."
                : ""
            } `}
          />
        </div>

        <div className="inputWrap">
          <TextField
            label="PasswordConFirm"
            variant="standard"
            fullWidth={true}
            placeholder="비밀번호를 한번 더 입력해주세요"
            margin="dense"
            color="warning"
            value={passwordConfirm}
            onChange={onChangepasswordConfirmValue}
            type="password"
            error={!isPasswordConfirmVaild}
            helperText={`${
              !isPasswordConfirmVaild ? "비밀번호가 일치하지 않습니다." : ""
            } `}
          />
        </div>

        <p className="feedbackMessage">{signUpFeedbackMessage}</p>
        {children}
      </form>
    </SignUp>
  );
};

export default SignUpView;
