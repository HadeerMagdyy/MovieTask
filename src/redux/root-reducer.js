import { combineReducers } from "redux";
import moviesReducers from "./reducer";

const rootReducer=combineReducers({
    data:moviesReducers
});

export default rootReducer;