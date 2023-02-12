import { useState } from "react";
import { ToDo } from "../../ToDo/Types/todos";

const useToDoDetail = () => {
  const [toDoDetail, setToDoDetail] = useState({
    content: "",
    createdAt: "",
    id: "",
    title: "",
    updatedAt: "",
    uId: "",
  });

  const detailToDo = (todoList: ToDo[], id: string) => {
    const finedToDo = todoList.find((todo) => todo.id === id);

    if (finedToDo) {
      setToDoDetail(finedToDo);
    }
  };

  const changeToDoDetailTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setToDoDetail((prev) => ({ ...prev, title: e.target.value }));
  };

  const changeToDoDetailContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setToDoDetail((prev) => ({ ...prev, content: e.target.value }));
  };

  return {
    toDoDetail,
    getDetailToDo: detailToDo,
    changeToDoDetailTitle,
    changeToDoDetailContent,
  };
};

export default useToDoDetail;
