import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import todoReducer from './reducers/todoSlice';
import darkModeReducer from './reducers/darkModeSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    dark: darkModeReducer
  },
})