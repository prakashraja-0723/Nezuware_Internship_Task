import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import useThemes from '@/hooks/useThemes.js';

const SelectThemes = () => {
  const {
    themes,
    pathname,
    defaultTheme: { myDay_theme, tasks_theme, important_theme },
    handleSelectTheme,
  } = useThemes();
  return (
    <>
      <div className={`flex items-center w-fit h-fit`}>
        <label
          htmlFor={`theme`}
          className={`cursor-pointer p-2 rounded-md hover:bg-[var(--hover)]`}
        >
          {/*  <span className={`p-1 bg-blue-700`}>*/}
          {/*  </span>*/}
          <HiOutlineDotsVertical className={`text-2xl`} />
        </label>
        <label htmlFor={'theme'}>
          <input type={`checkbox`} className={`sr-only peer`} id={`theme`} />
          <label
            htmlFor={'theme'}
            className={`absolute  w-dvw h-dvh top-0 left-0 scale-0 peer-checked:scale-100`}
          ></label>
          <ul
            className={`absolute -z-50 right-0 p-6 bg-[var(--dark-300)] w-fit h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-rows-2 lg:grid-flow-col grid-flow-row gap-8  opacity-0 top-0 peer-checked:opacity-100 peer-checked:top-16 peer-checked:z-50  transition-all duration-300 ease-in-out`}
          >
            {themes.map((theme, index) => (
              <li
                className={`w-12 aspect-square rounded-md gap-1 p-1 m-1 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110
                ${
                  (pathname === '/' || pathname === '') &&
                  myDay_theme === theme.theme
                    ? `ring-2 ring-white scale-110`
                    : pathname === '/important' &&
                      important_theme === theme.theme
                    ? `ring-2 ring-white scale-110`
                    : pathname === '/tasks' && tasks_theme === theme.theme
                    ? `ring-2 ring-white scale-110`
                    : `ring-0 hover:ring-2 hover:ring-white`
                }
                `}
                style={{ backgroundColor: theme.theme }}
                key={theme.id}
                onClick={() => handleSelectTheme(index)}
              ></li>
            ))}
          </ul>
        </label>
      </div>
    </>
  );
};
export default SelectThemes;
