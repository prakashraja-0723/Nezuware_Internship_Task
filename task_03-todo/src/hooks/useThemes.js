import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setImportantTheme, setMyDayTheme, setTasksTheme } from '@/redux/features/themeSlice.js';

const useThemes = () => {
  const themes = useSelector((state) => state.themes.themes);
  const defaultTheme = useSelector((state) => state.themes.defaultTheme);
  const dispatch = useDispatch();

  // find router path
  const location = useLocation();
  const { pathname } = location;

  const handleSelectTheme = (index) => {
    pathname === '/' && dispatch(setMyDayTheme(themes[index].theme));
    pathname === '/important' &&
      dispatch(setImportantTheme(themes[index].theme));
    pathname === '/tasks' && dispatch(setTasksTheme(themes[index].theme));
  };

  return {
    themes,
    pathname,
    defaultTheme,
    handleSelectTheme
  };
};

export default useThemes;
