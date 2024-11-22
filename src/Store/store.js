import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Recuder";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
