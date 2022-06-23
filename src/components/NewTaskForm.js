import React, { useState } from "react";

function NewTaskForm({ categories, onNewTaskSubmit }) {
const [text, setText] = useState("");
const [category, setCategory] = useState("Code");

function handleSubmit(e) {
  e.preventDefault();
  onNewTaskSubmit({ text, category});
  setText("");
  setCategory("Code");
}


  const newCategories = categories.filter((category) => {
    if(category !== "All"){
      return true
    }
  })
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
          {newCategories.map((category) => {
            return(
              <option>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
