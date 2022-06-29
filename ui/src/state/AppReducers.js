import { combineReducers } from "redux";
import {EmployeeReducer} from "./EmployeeReducer"

const AppReducer = combineReducers({
    EmployeeReducer
});


export const RootReducer = (state, action) => {
    return AppReducer(state, action);
};