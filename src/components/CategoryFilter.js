import React from "react";

function CategoryFilter({ categories, onHandleCategoryChange }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories && 
      categories.map((category) => {
        return (
          <button onClick={() => onHandleCategoryChange(category)} >{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
