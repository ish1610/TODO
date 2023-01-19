import { useSelector } from "react-redux";

import ToDoDetailLayoutView from "./Views/ToDoDetailLayoutView";

const ToDoDetailLayout = () => {
  const { createdAt } = useSelector((state: any) => state.toDoList.toDoDetail);

  const toDoDetail = {
    createdAt,
  };

  return <ToDoDetailLayoutView {...toDoDetail} />;
};

export default ToDoDetailLayout;
