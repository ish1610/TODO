import styled from "@emotion/styled";

import ConstrolCRUDButton from "../../Common/ConstrolCRUDButton";
import ControlLoginButton from "../../Common/ControlLoginButton";

const HeaderControll = styled.div`
  button {
    margin-right: 20px;
  }
`;

const HeaderControllView = () => {
  return (
    <HeaderControll>
      <ConstrolCRUDButton content="ToDo 작성" />
      <ControlLoginButton content="로그인" />
      <ControlLoginButton content="로그아웃" />
    </HeaderControll>
  );
};

export default HeaderControllView;
