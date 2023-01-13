import React from "react";

import { IAddTdoProps } from "./type";
import ToDoListView from "./Views/ToDoListView";

const ToDoList = () => {
  const handleAddToDo = () => {
    console.log("handleAddToto");
  };

  const AddtoDoprops: IAddTdoProps = {
    handleAddToDo: () => {
      handleAddToDo();
    },
  };

  return <ToDoListView {...AddtoDoprops} />;
};

export default ToDoList;
