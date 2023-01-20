import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { blue, lightOrange } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { IJoinInProps } from "../types/join";

const JoinInWrap = styled.div`
  padding: 120px 36px 180px;
  background-color: RGBA(41, 97, 113, 0.2);
  display: flex;
  height: calc(100vh - 80px);
  min-height: 800px;
  justify-content: center;
`;

const JoinIn = styled.div`
  width: 100%;
  height: 568px;

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
    width: 100%;

    ${flexCenter}
    flex-direction: column;
  }

  .inputWrap {
    width: 80%;
    margin-bottom: 40px;
  }

  input,
  textarea {
    padding: 8px;
    font-family: inherit;
  }

  button {
    margin-top: 40px;
    background-color: ${lightOrange};
    border: 1px solid ${lightOrange};
    border-radius: 8px;
    color: #fff;
    padding: 10px 40px;
    width: 80%;
    transition: 0.3s;
  }

  button:hover {
    background-color: #fff;
    color: ${lightOrange};
  }
`;

const JoinInView = ({
  joinInputValues,
  onChangeEmailValue,
  onChangePassworeValue,
  onChangepasswordConfirmValue,
}: IJoinInProps) => {
  const { email, password, passwordConfirm } = joinInputValues;
  return (
    <JoinInWrap>
      <JoinIn>
        <header>회원가입</header>
        <form>
          <div className="inputWrap">
            <TextField
              label="Email"
              variant="standard"
              autoFocus
              fullWidth={true}
              placeholder="이메일을 입력해주세요"
              margin="dense"
              color="warning"
              value={email}
              onChange={onChangeEmailValue}
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
              //   error={true}
            />
          </div>
        </form>

        <button type="submit" onClick={() => console.log(123)}>
          회원가입
        </button>
      </JoinIn>
    </JoinInWrap>
  );
};

export default JoinInView;
