import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({CATEGORIES,TASKS})

function App() {
const [tasks, setTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

function handleDelete(text) {
  const newList = tasks.filter((task) => task.text !== text);
  setTasks(newList)
}

function handleCategoryChange(category) {
  setSelectedCategory(category)
}

const itemsToDisplay = tasks.filter((task) => {
  if(selectedCategory === "All") return true;

  return task.category === selectedCategory;
})

function handleNewTask(newTask) {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onHandleCategoryChange={handleCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onNewTaskSubmit={handleNewTask}/>
      <TaskList TASKS={itemsToDisplay} onHandleDelete={handleDelete} />
    </div>
  );
}

export default App;
