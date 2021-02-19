// Tell the SearchReducer actions that will trigger functions here
import {SET_SEARCH} from "../Actions";

// Tells store the state
function searchReducer(state = [], action){
    switch (action.type){
        case SET_SEARCH:
            return [...action.search];
        default: 
            return state;
    }
}

export default searchReducer;