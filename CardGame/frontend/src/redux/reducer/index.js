import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import cardReducer from "./cardReducer";
import itemReducer from "./itemReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({ loginReducer, cardReducer, itemReducer, postReducer });

export default rootReducer;
