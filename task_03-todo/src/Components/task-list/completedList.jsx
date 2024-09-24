import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import useTodo from '@/hooks/useTodo.js';
import {
  FaCircleCheck,
  FaRegCircleCheck,
  FaRegStar,
  FaStar,
} from 'react-icons/fa6';
import TaskOptions from '@/Components/task-list/TaskOptions.jsx';
import { useSelector } from 'react-redux';

const CompletedList = ({ tasks, name }) => {
  const {
    handleToggleCompleted,
    toggleCompleted,
    handleCompletedTask,
    handleMarkImportant,
  } = useTodo();
  const defaultThemes = useSelector((state) => state.themes.defaultTheme);
  return (
    <>
      <button
        className={`bg-[var(--dark-300)] px-3 py-1.5 my-4 rounded-md flex items-center gap-1 hover:bg-[var(--dark-200)] ${
          tasks.length > 0 && name !== 'important' ? 'block' : 'hidden'
        }`}
        onClick={handleToggleCompleted}
      >
        <IoIosArrowForward
          className={`relative ${
            toggleCompleted ? 'rotate-90' : 'rotate-0'
          } transition-all`}
        />
        &nbsp;Completed&nbsp;
        {tasks.length}
      </button>

      {toggleCompleted &&
        tasks.map((task) => (
          <div
            className={`relative w-full min-h-12 lg:min-h-14 px-2.5 bg-[var(--dark-200)] rounded-lg flex items-center justify-between gap-2.5 hover:bg-[var(--dark-100)] transition-all cursor-pointer *:cursor-pointer`}
            key={task.id}
          >
            <span
              className={`text-xl px-2 ${
                !task.completed ? 'text-[var(--clr-1)]' : 'text-inherit'
              }`}
              onClick={() => handleCompletedTask(task)}
            >
              {task.completed ? <FaCircleCheck /> : <FaRegCircleCheck />}
            </span>
            <TaskOptions id={task.id} task={task} name={name}>
              {task.task}
            </TaskOptions>
            <span
              className={`text-xl mx-2 `}
              onClick={() => handleMarkImportant(task)}
            >
              {task.important ? <FaStar /> : <FaRegStar />}
            </span>
          </div>
        ))}
    </>
  );
};
export default CompletedList;
