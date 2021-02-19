//Whatever you define in UserActions needs to be told what to do in UserReducer
import {SET_USER, CLEAR_USER} from "../actions";

const initialUserState = {userName: "", id: null, role: ""};

function userReducer(state = initialUserState, action){
    switch (action.type) {
        case SET_USER:
           return {...state, username: action.username}; 
        case CLEAR_USER:
            return {...state, username: ""};
        default:
            return state;
    }
}

export default userReducer;