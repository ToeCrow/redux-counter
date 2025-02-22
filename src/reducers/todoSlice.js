import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{id: 1, task: "Learn React"}],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { 
        id: state.todos[state.todos.length - 1].id + 1, 
        task: action.payload };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;