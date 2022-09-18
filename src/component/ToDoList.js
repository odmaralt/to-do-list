import React from "react";
import ToDo from "./ToDo";
const ToDoList = (props) => {
  const { toDoList, handleToggle, handleFilter } = props;

  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
