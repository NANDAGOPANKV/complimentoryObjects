import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { formReducer } from "./form/FormReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  form: formReducer,
});
