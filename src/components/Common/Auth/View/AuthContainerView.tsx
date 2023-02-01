import styled from "@emotion/styled";
import backdrop from "../../../../assets/images/homeBackground.png";
import { IAuthContainerProps } from "../types/auth";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  min-height: 600px;
  padding: 80px 36px 180px;
  min-width: 450px;
  display: flex;
  align-items: center;
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
`;

const AuthMoveControll = styled.div`
  position: relative;
  .move {
    width: 100%;
    color: #777;
    font-size: 16px;
  }

  .move:hover {
    color: #333;
  }
`;

const AuthContainerView = ({
  children,
  onMove,
  moveText,
}: IAuthContainerProps) => {
  return (
    <Container>
      {children}

      <AuthMoveControll>
        <button className="move" onClick={onMove}>
          {moveText}
        </button>
      </AuthMoveControll>
    </Container>
  );
};

export default AuthContainerView;
