import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import userReducer from "./slice/userReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
