import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import cardReducer from "./cardReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({ loginReducer, cardReducer, itemReducer });

export default rootReducer;
