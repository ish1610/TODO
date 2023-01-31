import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToDoAPI } from "./api/toDo";
import { toDoAction } from "../../store/ToDo/toDoSlice";
import { IToDoItemProps, ToDo } from "./types/todos";
import ToDoItemView from "./Views/ToDoItemView";
import truncate from "./Utils/truncateString";

const ToDoItem = ({ toDo }: { toDo: ToDo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDelete = (id: string) => {
    if (window.confirm("ToDo를 정말 삭제하시겠습니까?")) {
      ToDoAPI.deleteToDo(id, (toDoId: string) =>
        dispatch(toDoAction.deleteToDo(toDoId))
      );
    }
  };

  const onClickDetail = (id: string) => {
    navigate(`/toDoDetail/${id}`);
  };

  const ToDoItemProps: IToDoItemProps = {
    onClickDelete: (id) => onClickDelete(id),
    onClickDetail: (id) => onClickDetail(id),
    toDo: {
      ...toDo,
      title: truncate(toDo.title, 18),
      content: truncate(toDo.content, 80),
    },
  };

  return <ToDoItemView {...ToDoItemProps} />;
};

export default ToDoItem;
