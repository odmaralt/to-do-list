import React from "react";
const ToDo = (props) => {
  const { todo, handleToggle } = props;
  const handleClick = (e) => {
    //   handleClick function takes e
    e.preventDefault();
    // then there is e and preventDefault function after it. which makes it so the event default doenst happen
    handleToggle(e.currentTarget.id);
    // handleToggle takes event's currentTarget's id
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo strike" : "todo"}
    >
      {todo.task}
    </div>
  );
};
export default ToDo;
