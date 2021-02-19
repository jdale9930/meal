// Set to constants so mistypes will show up in the complier
export const ADD_MEAL = "Add Meal";
export const DELETE_MEAL = "Delete Meal";

export function addMeal(meal){              //meal should have the id, title, url in it
    return { type: ADD_MEAL, add: meal };   
}

export function deleteMeal(id){             //need the id to delete a specific one
    return { type: DELETE_MEAL, id: id }; 
}