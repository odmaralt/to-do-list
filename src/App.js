import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import ToDoList from "./component/ToDoList";
import TodoForm from "./component/TodoForm";

function App() {
  const [toDoList, setToDoList] = useState(data);
  const [deleteTasks, setDeletedTasks] = useState([]);
  const handleToggle = (id) => {
    const mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    const filtered = toDoList.filter((task) => {
    
      return !task.complete;
    });

    const deletedTask = toDoList.find((task) => {
      return task.complete;
    });
    setDeletedTasks([...deleteTasks, deletedTask]);
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    const copy = [
      ...toDoList,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <div>
      <div id="full" className="App">
        {" "}
        <div>
          <div id="navBar">
            <p id="title">To-do List</p>{" "}
          </div>
          <div style={{ overflow: "scroll" }} id="new">
            <TodoForm addTask={addTask} />

            <img
            alt=""
              id="trashIcon"
              onClick={handleFilter}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAY0lEQVRIiWNgGAWDGBxnYGD4j4aPUcvww1gMJxcfxmYBE7Vcigf8p4MdQwAw4pGjVhBhtYMecYwVjFo8avGoxaMWj1o8avHQsvgJFcx/TI4mT6hGcht5jxgYGDwodPgoGMIAAIf9LS9I+wcVAAAAAElFTkSuQmCC"
            ></img>
          </div>
          <p id="tasks">Tasks:</p>
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        </div>
      </div>
      <div id="deleted">
        <p id="deletedTasks">Deleted Tasks</p>
        {deleteTasks.map((task) => {
          return <p style={{paddingTop: "10px", paddingLeft: "20px"}}>{task.task}</p>;
        })}
      </div>
    </div>
  );
}
export default App;
