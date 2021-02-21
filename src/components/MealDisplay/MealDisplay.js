import React, { useState } from "react";
import "./MealDisplay.css";


const MealDisplay = (props) => {
  return (
    <div className = "displayContainer">
      <div></div>
      <img className = "mealImage" src={props.image} />
      <div className = "mealName">{props.title}</div>
      <label htmlFor="meals">Choose A Day</label>
      <select name="days" id="meals">
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <button>Add</button>
      <button>Delete</button>
    </div>
  );
};

export default MealDisplay;
