import { useNavigate } from "react-router-dom";
import { IToDoItemProps, ToDo } from "../types/todos";
import ToDoItemView from "./views/ToDoItemView";
import truncate from "../utils/truncateString";
import { deleteToDoAsync } from "../slice/toDoSlice";
import { useAppDispatch } from "../../../store/Hooks/hook";

const ToDoItem = ({ toDo }: { toDo: ToDo }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickDelete = (id: string) => {
    if (window.confirm("ToDo를 정말 삭제하시겠습니까?")) {
      dispatch(deleteToDoAsync(id));
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
