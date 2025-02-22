import {createSlice} from '@reduxjs/toolkit'

const savedCountFromStorage = localStorage.getItem("savedCount")
  ? parseInt(localStorage.getItem("savedCount"), 10)
  : 0;

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    savedCount: savedCountFromStorage 
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    double: (state) => {
      state.count = state.count * 2
    },
    save: (state) => {
      state.savedCount = state.count;
      localStorage.setItem("savedCount", state.count);
    },
    reset: (state) => {
      state.count = 0;
      state.savedCount = 0;
      localStorage.removeItem("savedCount");
    },
    addSaved: (state) => {
      state.count += state.savedCount;
    }
  }
})

export const { increment, decrement, incrementByAmount, double, save, reset, addSaved } = counterSlice.actions

export default counterSlice.reducer