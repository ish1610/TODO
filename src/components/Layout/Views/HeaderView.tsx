import styled from "@emotion/styled";

import logo from "../../../assets/images/homeBackground.png";
import { blue } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { IHeaderProps } from "../types/header";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px 22px;
  height: 80px;
  border-bottom: 1px solid ${blue};

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const HeaderLogoWrap = styled.div`
  ${flexCenter}
  flex-direction: column;

  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 16px;
  }
`;

const NavController = styled.nav``;

const HeaderView = ({ handleMoveRegist }: IHeaderProps) => {
  return (
    <HeaderWrap>
      <HeaderLogoWrap>
        <img src={logo} alt="ToDo's logo" />
        <h1>ToDo's</h1>
      </HeaderLogoWrap>

      <NavController>
        <button>로그인</button>
        <button>로그아웃</button>
        <button onClick={handleMoveRegist}>회원가입</button>
      </NavController>
    </HeaderWrap>
  );
};

export default HeaderView;
