import { createSlice } from '@reduxjs/toolkit';

const position = localStorage.getItem('position');
localStorage.setItem('position', position ? position : 0);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    position: position,
  },
  reducers: {
    setPosition: (state, action) => {
      action.payload >= 0 && action.payload < 4
        ? (state.position = action.payload)
        : (state.position = 0);
      localStorage.setItem('position', state.position);
    },
  },
});

export const { setPosition } = menuSlice.actions;
export default menuSlice.reducer;
