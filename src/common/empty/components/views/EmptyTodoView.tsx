import styled from "@emotion/styled";
import { blue, orange } from "../../../styles/commonColor";
import backgroundImg from "../../../../assets/images/homeBackground.png";
import { flexCenter } from "../../../styles/FlexCenter";
import { IEmptyProps } from "../../types/empty";

const NoneTodo = styled.div`
  width: 80%;
  border: 3px solid ${blue};
  border-radius: 8px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 220px;
    height: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.2;
  }

  @media (max-width: 1000px) {
    ::after {
      width: 180px;
      height: 180px;
    }
  }

  @media (max-width: 750px) {
    padding: 0 42px;
    ::after {
      width: 160px;
      height: 160px;
    }
  }
`;

const NoneTodoContent = styled.div`
  height: 400px;
  ${flexCenter}
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 32px;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 26px;
    }
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const NavigatorBtn = styled.button`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  height: 50px;
  width: 220px;
  margin: 0 auto;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid ${orange};
  background-color: ${orange};
  color: #fff;
  font-size: 16px;
  transition: 0.3s;

  :hover {
    background-color: #fff;
    color: #333;
  }

  @media (max-width: 1000px) {
    height: 40px;
    width: 200px;
  }

  @media (max-width: 750px) {
    height: 40px;
    width: 180px;
    font-size: 14px;
  }
`;

const EmptyTodoView = ({ children, isExistBtn, onMoveHome }: IEmptyProps) => {
  return (
    <NoneTodo>
      <NoneTodoContent>
        <h2>{children} 😭</h2>
        {isExistBtn && (
          <NavigatorBtn onClick={() => onMoveHome()}>
            HOME으로 이동
          </NavigatorBtn>
        )}
      </NoneTodoContent>
    </NoneTodo>
  );
};

export default EmptyTodoView;
