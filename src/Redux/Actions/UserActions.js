// Set to consts to prevent misspellings not caught by complier
// Actions set up the triggers for the reducers

export const SET_USER = "Set User";
export const CLEAR_USER = "Clear User";

export function setUser(username){
    return { type: SET_USER, username: username};
}

export function clearUser(){
    return { type: CLEAR_USER };
}