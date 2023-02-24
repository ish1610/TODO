import styled from "@emotion/styled";
import { yellow } from "../../../styles/commonColor";
import { flexCenter } from "../../../styles/FlexCenter";

const LoadingWrap = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.8);
  ${flexCenter}
`;

const Loading = styled.div`
  width: 72px;
  height: 72px;
  margin: 30px auto;
  border: 4px solid ${yellow};
  border-top-color: transparent;
  border-radius: 50%;
  animation: loader 1s infinite linear;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingView = () => {
  return (
    <LoadingWrap>
      <Loading></Loading>
    </LoadingWrap>
  );
};

export default LoadingView;
