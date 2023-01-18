import styled from "@emotion/styled";
import { orange } from "../../styles/commonColor";
import backgroundImg from "../../../../assets/images/homeBackground.png";
import { flexCenter } from "../../styles/FlexCenter";

const NoneTodo = styled.div`
  width: 80%;
  height: 400px;
  border: 3px solid ${orange};
  border-radius: 8px;
  position: relative;
`;

const BackGroundImg = styled.div`
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
`;

const NoneTodoContent = styled.div`
  height: 100%;
  ${flexCenter}

  h2 {
    font-weight: 700;
    font-size: 32px;
  }
`;

const EmptyTodoView = ({ children }: { children: React.ReactNode }) => {
  return (
    <NoneTodo>
      <BackGroundImg />
      <NoneTodoContent>
        <h2>{children} 😭</h2>
      </NoneTodoContent>
    </NoneTodo>
  );
};

export default EmptyTodoView;
