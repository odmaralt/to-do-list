import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";
import ToDoList from "./component/ToDoList";
import TodoForm from "./component/TodoForm";


function App() {
  const [toDoList, setToDoList] = useState(() => {
    const saved = localStorage.getItem("toDoList");
    return saved ? JSON.parse(saved) : data;
  });
  
  const [deleteTasks, setDeletedTasks] = useState(() => {
    const saved = localStorage.getItem("deletedTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);
  
  useEffect(() => {
    localStorage.setItem("deletedTasks", JSON.stringify(deleteTasks));
  }, [deleteTasks]);
  
  const handleToggle = (id) => {
    const mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    // check if there is at least one completed task
    const hasCompletedTask = toDoList.some(task => task.complete);

    if (!hasCompletedTask) {
      return; // do nothing
    }

    const filtered = toDoList.filter(task => !task.complete);
    const deletedTask = toDoList.find(task => task.complete);

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
      {/* <h1 id="errormsg">This site can only be viewed on desktop</h1> */}
      <div id="fullPage">
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
          <div style={{ overflow: "scroll", height: "10vh" }}>

            {deleteTasks.map((task) => {
              return (
                <p
                  id="deletedTasksDiv"
                  key={task.id}
                  style={{
                    paddingTop: "10px",
                    textAlign: "center",
                    overflow: "scroll",
                    textDecoration: task.complete ? "line-through" : "none",
                  }}
                >
                  {task.task}
                </p>
              );
            })}          </div>

        </div>
      </div>
    </div>
  );
}
export default App;
