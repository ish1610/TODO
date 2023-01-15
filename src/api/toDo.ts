export const ToDoAPI = {
  createToDo: (toDo: { title: string; content: string }) => {
    const newToDo = [
      {
        toDo,
      },
    ];
    localStorage.setItem("todo", JSON.stringify(newToDo));

    return "ToDo가 작성되었습니다!";
  },
};
