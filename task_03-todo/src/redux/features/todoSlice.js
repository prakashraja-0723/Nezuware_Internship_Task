import { createSlice } from '@reduxjs/toolkit';

const getDataFromLocal = () => {
  const data = localStorage.getItem('todos');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todoList: getDataFromLocal() },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.unshift(action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload,
      );
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    toggleTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          todo.status = todo.completed ? 'completed' : 'in progress';
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    toggleImportant: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.important = !todo.important;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    toggleMyDay: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.myDay = !todo.myDay;
          todo.my_day = todo.myDay === true;
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
    resetMyDay: (state) => {
      state.todoList = state.todoList.map((todo) => {
        todo.myDay = false;
        todo.my_day = false;
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(state.todoList));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, toggleImportant, toggleMyDay, resetMyDay } = todoSlice.actions;
export default todoSlice.reducer;
