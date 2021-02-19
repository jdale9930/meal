import ADD_MEAL from "../Actions";
import DELETE_MEAL from "../Actions";

function mealPlannerReducer(state = [], action){
    switch (action.type){
        case ADD-MEAL:
            return [...meal, action.meal];
        case DELETE-MEAL:
            let newState = [...meal];
            let idx = newState.findIndex((meal) => meal.id === action.id) //"meal" could be "val" or anything else. it's like [i] in a for loop 
            newState.splice(idx, 1);                //splice does not make a new copy. delete starting at index(idx) deteremined from using find on the prior line and how many you want to delete (1)
            return newState;
        default: 
            return state;
    }
}

export default mealPlannerReducer;