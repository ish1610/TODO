import { useDispatch, useSelector } from "react-redux";
import { ToDoAPI } from "../../api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { IToDoItemProps, ToDo } from "../../types/todos";
import ToDoItemView from "./Views/ToDoItemView";

const ToDoItem = ({ toDo }: { toDo: ToDo }) => {
  const dispatch = useDispatch();

  const onClickDelete = (id: string) => {
    if (window.confirm("ToDo를 정말 삭제하시겠습니까?")) {
      ToDoAPI.deleteToDo(id, (toDoId: string) =>
        dispatch(toDoAction.deleteToDo(toDoId))
      );
    }
  };

  const ToDoItemProps: IToDoItemProps = {
    onClickDelete: (id) => onClickDelete(id),
    toDo,
  };

  return <ToDoItemView {...ToDoItemProps} />;
};

export default ToDoItem;
