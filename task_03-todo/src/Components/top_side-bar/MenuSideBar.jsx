import React from 'react';
import { FiSun } from 'react-icons/fi';
import { TiStarOutline } from 'react-icons/ti';
import { BiHomeAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setPosition } from '@/redux/features/menuSlice.js';
import { Link } from 'react-router-dom';
import useThemes from '@/hooks/useThemes.js';

const MenuSideBar = () => {
  const position = useSelector((state) => state.menu.position);
  const TASK_DATA = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const {
    pathname,
    defaultTheme: { myDay_theme, important_theme, tasks_theme },
  } = useThemes();

  const myDayCount = TASK_DATA.filter(
    (task) => task.myDay === true && task.completed === false,
  ).length;
  const importantCount = TASK_DATA.filter(
    (task) => task.important === true && task.completed === false,
  ).length;
  const tasksCount = TASK_DATA.filter(
    (task) => task.tasks === true && task.completed === false,
  ).length;

  return (
    <>
      <div className={` absolute z-50 left-0 top-0 h-[var(--h-fit)] w-14 md:w-16 lg:w-80 bg-[var(--dark-300)] text-[var(--clr-1)]`}>
        <ul
          className={` h-fit relative flex items-start justify-start flex-col gap-1 md:px-2 py-4 lg:pt-10 lg:pb-4 border-b border-[var(--dark-100)]  *:flex *:items-center *:cursor-pointer lg:hover:*:bg-[var(--hover)] *:rounded-md transition-all duration-300 ease-in-out`}
        >
          <span
            className={`absolute w-[5px] md:h-[42px] lg:h-6 bg-blue-500 left-2 z-[1] transition-all duration-300 ease-in-out rounded-full hidden md:hidden lg:block`}
            style={{
              top: `calc(3rem + calc(${position} * 2.75rem))`,
            }}
          ></span>
          <Link
            to={`/`}
            className={`text-2xl py-4 lg:py-1.5 lg:px-4 w-full flex justify-center lg:justify-start lg:text-lg ${
              pathname === '/' && 'bg-[var(--hover)]'
            }`}
            onClick={() => dispatch(setPosition(0))}
          >
            <FiSun style={{ color: myDay_theme }} />
            <span
              className={`hidden lg:flex-1 lg:flex lg:items-center lg:justify-between`}
            >
              &nbsp;My Day&nbsp;
              <span className={`text-sm`}>
                {myDayCount !== 0 && myDayCount}
              </span>
            </span>
          </Link>
          <Link
            to={`/important`}
            className={`text-2xl py-4 lg:py-1.5 lg:px-4 w-full flex justify-center lg:justify-start lg:text-lg ${
              pathname === '/important' && 'bg-[var(--hover)]'
            }`}
            onClick={() => dispatch(setPosition(1))}
          >
            <TiStarOutline style={{ color: important_theme }} />
            <span
              className={`hidden lg:flex-1 lg:flex lg:items-center lg:justify-between`}
            >
              &nbsp;Important&nbsp;
              <span className={`text-sm`}>
                {importantCount !== 0 && importantCount}
              </span>
            </span>
          </Link>
          <Link
            to={`/tasks`}
            className={`text-2xl py-4 lg:py-1.5 lg:px-4 w-full flex justify-center lg:justify-start lg:text-lg ${
              pathname === '/tasks' && 'bg-[var(--hover)]'
            }`}
            onClick={() => dispatch(setPosition(2))}
          >
            <BiHomeAlt style={{ color: tasks_theme }} />
            <span
              className={`hidden lg:flex-1 lg:flex lg:items-center lg:justify-between`}
            >
              &nbsp;Tasks&nbsp;
              <span className={`text-sm`}>
                {tasksCount !== 0 && tasksCount}
              </span>
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default MenuSideBar;
