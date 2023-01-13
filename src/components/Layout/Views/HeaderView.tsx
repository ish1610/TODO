import styled from "@emotion/styled";

import logo from "../../../assets/images/homeBackground.png";
import HeaderControllView from "./HeaderControllView";

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px 22px;
  height: 80px;
  border-bottom: 1px solid RGB(43, 46, 74);
`;

const HeaderLogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 16px;
  }
`;

const HeaderView = () => {
  return (
    <HeaderWrap>
      <HeaderLogoWrap>
        <img src={logo} alt="ToDo's logo" />
        <h1>ToDo's</h1>
      </HeaderLogoWrap>
      <HeaderControllView />
    </HeaderWrap>
  );
};

export default HeaderView;
