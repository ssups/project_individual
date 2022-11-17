import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({ loginReducer, postReducer });

export default rootReducer;
