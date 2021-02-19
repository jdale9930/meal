// Index file works like a hub where it combines the reducers
import {combineReducers} from "redux";
import userReducer from "./UserReducer";
import searchReducer from "./SearchReducers";
import mealPlanReducer from "./MealPlannerReducer";

const rootReducer = combineReducers ({
    search: searchReducer,
    user: userReducer,
    mealPlan: mealPlanReducer,
});

export default rootReducer;