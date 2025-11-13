import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo); // Immer handles immutable updates
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    // Add other reducers for editing, filtering, etc.
  },
});

export const { addTodo, toggleComplete, deleteTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
