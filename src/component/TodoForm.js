import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState();

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        onChange={handleChange}
        type="text"
        id="newTask"
        placeholder="New Task"
      />
      <button id="addButton">Submit</button>
    </form>
  );
};
export default TodoForm;
