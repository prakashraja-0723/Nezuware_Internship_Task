import React from 'react';
import { FiSun } from 'react-icons/fi';
import {
  FaCircleCheck,
  FaRegCircleCheck,
  FaRegStar,
  FaStar,
} from 'react-icons/fa6';
import { AiOutlineDelete, AiOutlineSun } from 'react-icons/ai';
import { BiSolidSun } from 'react-icons/bi';
import useTodo from '@/hooks/useTodo.js';
import { TfiTime } from 'react-icons/tfi';

const TaskOptions = ({ id, task, children, name }) => {
  const {
    handleAddMyDay,
    handleMarkImportant,
    handleCompletedTask,
    handleDeleteTask,
  } = useTodo();

  return (
    <>
      <label htmlFor={`task_${id}`} className={`flex-1`}>
        <input type={`checkbox`} className={`sr-only peer`} id={`task_${id}`} />
        {/*body content*/}
        <label
          htmlFor={`task_${id}`}
          className={`flex flex-col cursor-pointer`}
        >
          <span
            className={`text-[var(--clr-1)]  text-lg text-wrap text-left ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {children}
          </span>
          <p className={`flex items-center gap-4 text-xs md:text-sm pb-1.5`}>
            <span className={`flex items-center`}>
              {name !== 'myDay' && task.my_day === true ? (
                <>
                  <AiOutlineSun />
                  My Day
                </>
              ) : (
                'Tasks'
              )}
            </span>
            <span className={`flex items-center`}>
              {task.completed ? <FaRegCircleCheck /> : <TfiTime />}&nbsp;
              {task.status}
            </span>
          </p>
        </label>
        {/*Task options bg */}
        <label
          htmlFor={`task_${id}`}
          className={`fixed top-0 left-0 w-screen h-screen -z-10 peer-checked:z-50 `}
        ></label>
        {/*Task options*/}
        <ul
          className={`w-64 bg-[var(--dark-400)] border border-[var(--dark-100)] overflow-clip rounded-lg shadow text-inherit *:w-full hover:*:bg-[var(--dark-200)] *:py-4 *:px-3 *:border-b *:border-inherit *:transition-all absolute -top-4 right-10 opacity-0 -z-50 peer-checked:top-0 peer-checked:z-50 peer-checked:opacity-100 transition-all duration-300`}
        >
          <li
            className={`flex items-center gap-2 text-base text-[var(--theme-7)]`}
            onClick={() => {
              handleAddMyDay(task);
            }}
          >
            {task.myDay ? <BiSolidSun /> : <FiSun />}
            <span className={`text-[var(--clr-1)]`}>
              {task.myDay ? 'Remove from My Day' : 'Add to My Day'}
            </span>
          </li>
          <li
            className={`flex items-center gap-2 text-base text-[var(--theme-7)]`}
            onClick={() => {
              handleMarkImportant(task);
            }}
          >
            {task.important ? <FaStar /> : <FaRegStar />}
            <span className={`text-[var(--clr-1)]`}>
              {task.important ? 'Unmark as Important' : 'Mark as Important'}
            </span>
          </li>
          <li
            className={`flex items-center gap-2 text-base text-[var(--theme-7)]`}
            onClick={() => {
              handleCompletedTask(task);
            }}
          >
            {task.completed ? <FaCircleCheck /> : <FaRegCircleCheck />}
            <span className={`text-[var(--clr-1)]`}>
              {task.completed ? 'Unmark as Completed' : 'Mark as Completed'}
            </span>
          </li>
          <li
            className={`text-red-400 font-normal flex items-center gap-2 text-base`}
            onClick={() => handleDeleteTask(task)}
          >
            <AiOutlineDelete />
            <span>Delete Task</span>
          </li>
        </ul>
      </label>
    </>
  );
};
export default TaskOptions;
