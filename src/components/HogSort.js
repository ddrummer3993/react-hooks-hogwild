import React from "react";

function HogSort({ onSortSelect }) {
  return(
    <div>
      <h4>Sort By:</h4>
      <select onChange={onSortSelect}>
        <option>Please choose sort option</option>
        <option>Name</option>
        <option>Weight</option>
      </select>
    </div>
  )
};

export default HogSort;