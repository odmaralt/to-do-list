import React from "react";
function ToDoList({ toDoList, handleToggle }) {
  return (
    <div id="allTasks">
      {toDoList.map((task) => (
        <div
        id="tasksDiv"
          key={task.id}
          onClick={() => handleToggle(task.id)}
          style={{
            overflow:"scroll",
            paddingBottom: "8px",
            textDecoration: task.complete ? "line-through" : "none",
            cursor: "pointer", // Add cursor style to indicate clickability
          }}
        >
          {task.task}
        </div>
      ))}
    </div>
  );
}
export default ToDoList;
