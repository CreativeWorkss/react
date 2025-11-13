import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import userReducer from "./slice/userReducer";
import todoReducer from "./slice/toDoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    todos: todoReducer,
  },
});
