import { createSlice } from '@reduxjs/toolkit';

const themes = [
  { id: 'theme_1', theme: '#788fff' },
  { id: 'theme_2', theme: '#bc7abc' },
  { id: 'theme_3', theme: '#e46c8c' },
  { id: 'theme_4', theme: '#e46b67' },
  { id: 'theme_5', theme: '#4aa079' },
  { id: 'theme_6', theme: '#479e98' },
  { id: 'theme_7', theme: '#8795a0' },
  { id: 'theme_8', theme: '#a0cbf1' },
  { id: 'theme_9', theme: '#d6bde7' },
  { id: 'theme_10', theme: '#f5b6c2' },
  { id: 'theme_11', theme: '#9ad2ba' },
  { id: 'theme_12', theme: '#8bd3ce' },
  { id: 'theme_13', theme: '#bac8d4' },
];

const defaultTheme = {
  myDay_theme: themes[0].theme,
  important_theme: themes[1].theme,
  tasks_theme: themes[2].theme,
};

// Load the themes from localStorage
const loadThemeFromLocal = () => {
  const data = localStorage.getItem('themes');
  if (data) {
    return JSON.parse(data);
  }
  return themes;
};

// Load the default theme from localStorage
const loadDefaultThemeFromLocal = () => {
  const data = localStorage.getItem('defaultTheme');
  if (data) {
    return JSON.parse(data);
  }
  return defaultTheme;
};

// Set the themes to localStorage
localStorage.setItem('themes', JSON.stringify(themes));
// Set the default theme to localStorage
loadDefaultThemeFromLocal() === {} &&
  localStorage.setItem('defaultTheme', JSON.stringify(defaultTheme));

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themes: loadThemeFromLocal(),
    defaultTheme: loadDefaultThemeFromLocal(),
  },
  reducers: {
    setMyDayTheme: (state, action) => {
      state.defaultTheme.myDay_theme = action.payload;
      localStorage.setItem('defaultTheme', JSON.stringify(state.defaultTheme));
    },
    setImportantTheme: (state, action) => {
      state.defaultTheme.important_theme = action.payload;
      localStorage.setItem('defaultTheme', JSON.stringify(state.defaultTheme));
    },
    setTasksTheme: (state, action) => {
      state.defaultTheme.tasks_theme = action.payload;
      localStorage.setItem('defaultTheme', JSON.stringify(state.defaultTheme));
    },
  },
});

export const { setMyDayTheme, setImportantTheme, setTasksTheme } =
  themeSlice.actions;
export default themeSlice.reducer;
