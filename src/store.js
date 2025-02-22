import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import todoReducer from './reducers/todoSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
})