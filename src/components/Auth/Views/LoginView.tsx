import styled from "@emotion/styled";
import backdrop from "../../../assets/images/homeBackground.png";
import { blue, orange } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { ILoginProps } from "../types/login";

const LoginWrap = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 500px;
  padding: 120px 36px 180px;
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

const Login = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  height: 400px;
  background-color: #fff;
  border: 1px solid ${blue};
  border-radius: 8px;
  padding: 30px 50px 60px;
  margin-bottom: 24px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-bottom: 30px;
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

  .loginControlWrap {
    ${flexCenter}
    flex-direction: column;
    margin-top: 50px;
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

const LoginView = ({ onSubmitLogin, onMoveSignUp }: ILoginProps) => {
  return (
    <LoginWrap>
      <Login>
        <header>로그인</header>
        <form onSubmit={onSubmitLogin}>
          <div className="inputWrap">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="example@email.com" />
          </div>

          <div className="inputWrap">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="비밀번호" />
          </div>

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
