import React from 'react';
import useTodo from '@/hooks/useTodo.js';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCircle } from 'react-icons/bi';
import useThemes from '@/hooks/useThemes.js';

const InputBox = ({ name }) => {
  const {
    handleEnterToSave,
    handleSavingNewTask,
    handleBlur,
    handleFocus,
    addNewTask,
    placeholder,
  } = useTodo();
  const {
    defaultTheme: { myDay_theme, important_theme, tasks_theme },
    pathname,
  } = useThemes();

  return (
    <>
      <div
        className={`w-full md:w-[calc(var(--md-fit)-0rem)] lg:w-[calc(var(--lg-fit)-4rem)] h-12 md:h-[3.25rem] rounded-lg bg-[var(--dark-200)] focus-within:bg-dark-100 hover:bg-dark-100 flex items-center justify-center px-3 text-sm gap-3`}
      >
        <label htmlFor={name} className={`text-sm lg:text-xl`}>
          {placeholder === 'Add a task' ? <AiOutlinePlus /> : <BiCircle />}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          className={`w-full h-full bg-inherit outline-none text-base md:text-lg placeholder:text-inherit placeholder:text-xs md:placeholder:text-base`}
          style={{
            color:
              pathname === '/'
                ? myDay_theme
                : pathname === '/important'
                ? important_theme
                : tasks_theme,
          }}
          placeholder={placeholder}
          onBlur={(e) => handleBlur(e)}
          onFocus={(e) => handleFocus(e)}
          onChange={(e) => handleSavingNewTask(e, name)}
          onKeyDown={(e) => handleEnterToSave(e)}
          value={addNewTask.task}
        />
      </div>
    </>
  );
};
export default InputBox;
