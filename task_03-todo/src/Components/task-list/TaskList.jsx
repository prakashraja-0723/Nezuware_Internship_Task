import React from 'react';
import TaskOptions from '@/Components/task-list/TaskOptions.jsx';
import {
  FaCircleCheck,
  FaRegCircleCheck,
  FaRegStar,
  FaStar,
} from 'react-icons/fa6';
import useTodo from '@/hooks/useTodo.js';

const TaskList = ({ tasks, name }) => {
  const { handleCompletedTask, handleMarkImportant } = useTodo();
  return tasks.map((task) => (
    <div
      className={`relative w-full min-h-12 lg:min-h-14  px-2.5 bg-[var(--dark-200)] rounded-lg flex items-center justify-between gap-2.5 hover:bg-[var(--dark-100)] transition-all cursor-pointer *:cursor-pointer`}
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
  ));
};
export default TaskList;
