import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { userUpdateReducer } from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userUpdateReducer,
  // can add more reducers if needed
});

export default rootReducer;
