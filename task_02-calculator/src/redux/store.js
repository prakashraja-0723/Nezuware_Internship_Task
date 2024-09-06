import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./features/calculator_history/calcHistorySlice.js";

const store = configureStore({
  reducer: {
    calc_history: calculatorReducer,
  },
});

export default store;
