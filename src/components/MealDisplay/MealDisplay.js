import React, { useState } from "react";
import "./MealDisplay.css";

const MealDisplay = ({ meal, addMeal, deleteMeal, onPlanner }) => {
  return (
    <div>
      <h3>{meal.title}</h3>
      <img src={meal.url} />
      <label for="meals">Choose A Day</label>
      <select name="days" id="meals">
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <button onClick={() => addMeal(meal.id)}></button>
      <button onClick={() => deleteMeal(meal.id)}></button>
    </div>
  );
};

export default MealDisplay;
