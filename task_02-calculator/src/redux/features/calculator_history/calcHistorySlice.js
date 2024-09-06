import { createSlice } from "@reduxjs/toolkit";

const loadFromHistory = () => {
  const getHistory = localStorage.getItem("calculator_history");
  return getHistory ? JSON.parse(getHistory) : [];
};

const saveToHistory = (state) => {
  localStorage.setItem("calculator_history", JSON.stringify(state));
};

const calcHistorySlice = createSlice({
  name: "calc_history",
  initialState: loadFromHistory(),
  reducers: {
    addToHistory: (state, action) => {
      state.push(action.payload);
      saveToHistory(state);
    },
    clearHistory: (state, action) => {
      state.length = 0;
      localStorage.removeItem("calculator_history");
    },
  },
});

export const { addToHistory, clearHistory } = calcHistorySlice.actions;
export default calcHistorySlice.reducer;
