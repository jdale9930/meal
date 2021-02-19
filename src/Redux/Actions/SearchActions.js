// Setting as a const to so we get compiler errors if not matching
export const SET_SEARCH = "Set Search";

// Action triggers the reducer to perform a function. Type is what the reducer is looking for.
export function setSearch(results) {
    return { type: SET_SEARCH, search: results };
}
