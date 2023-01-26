import styled from "@emotion/styled";
import backdrop from "../../../assets/images/homeBackground.png";
import { blue } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";

const LoginWrap = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  padding: 120px 36px 180px;
  min-height: 800px;
  min-width: 500px;
  ${flexCenter}

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
`;

const Login = styled.div`
  position: relative;
  width: 80%;
  height: 800px;
  background-color: #fff;
  border: 1px solid ${blue};
  border-radius: 8px;

  height: 668px;
  padding: 30px 50px 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;

  header {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;

const LoginView = () => {
  return (
    <LoginWrap>
      <Login>
        <header>로그인</header>
      </Login>
    </LoginWrap>
  );
};

export default LoginView;
