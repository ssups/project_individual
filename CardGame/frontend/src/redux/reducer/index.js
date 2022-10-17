import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { cardReducer } from "./cardReducer";

const rootReducer = combineReducers({ loginReducer, cardReducer });

export default rootReducer;
