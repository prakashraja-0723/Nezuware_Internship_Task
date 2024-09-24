import { configureStore } from '@reduxjs/toolkit';
import MenuReducer from '@/redux/features/menuSlice.js';
import TodoReducer from '@/redux/features/todoSlice.js';
import ThemeReducer from '@/redux/features/themeSlice.js';

const store = configureStore({
  reducer: {
    menu: MenuReducer,
    todo: TodoReducer,
    themes: ThemeReducer
  },
});

export default store;
