import React from "react";
import Task from "./Task";

function TaskList({ TASKS, onHandleDelete }) {
  return (
    <div className="tasks">
      {TASKS && 
      TASKS.map((task) => {
        return (
          <Task key={task.text} task={task} onHandleDelete={onHandleDelete}/>
        )
      })}
    </div>
  );
}

export default TaskList;
