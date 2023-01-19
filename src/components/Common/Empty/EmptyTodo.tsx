import { useNavigate } from "react-router-dom";
import { IEmptyProps } from "../types/empty";
import EmptyTodoView from "./Views/EmptyTodoView";

const EmptyTodo = ({
  children,
  isExistBtn = false,
}: Pick<IEmptyProps, "children" | "isExistBtn">) => {
  const navigate = useNavigate();

  const emptyTodoProps = {
    onMoveHome: () => navigate("/"),
    children,
    isExistBtn,
  };

  return <EmptyTodoView {...emptyTodoProps} />;
};

export default EmptyTodo;
