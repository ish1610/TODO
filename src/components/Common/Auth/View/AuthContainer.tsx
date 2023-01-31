import styled from "@emotion/styled";
import backdrop from "../../../../assets/images/homeBackground.png";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 750px;
  padding: 50px 36px 180px;
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

  @media (max-width: 750px) {
    padding: 120px 10px 180px;
  }
`;

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default AuthContainer;
