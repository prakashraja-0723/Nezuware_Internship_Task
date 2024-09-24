import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '@/Components/task-list/TaskList.jsx';
import InputBox from '@/Components/ui/inputBox.jsx';
import Header from '@/Components/ui/Header.jsx';
import EmptyList from '@/Components/task-list/emptyList.jsx';
import task_empty from '@/assets/task_empty.png';
import CompletedList from '@/Components/task-list/completedList.jsx';

const Tasks = () => {
  const TASK_DATA = useSelector((state) => {
    return state.todo.todoList;
  });
  const tasks = TASK_DATA.filter(
    (task) => task.tasks === true && task.completed === false,
  );
  const tasks_completed = TASK_DATA.filter(
    (task) => task.tasks === true && task.completed === true,
  );
  return (
    <>
      <div
        className={` w-full flex-1 py-8 overflow-x-clip overflow-y-auto flex items-start flex-col gap-1`}
      >
        {TASK_DATA.filter((task) => task.tasks === true).length === 0 ? (
          <EmptyList
            description={`Tasks show up here if they aren't part of any lists you've created.`}
            asset={task_empty}
          />
        ) : (
          <>
            <TaskList tasks={tasks} name={'tasks'} />
            <CompletedList tasks={tasks_completed} name={name} />
          </>
        )}
      </div>
    </>
  );
};
export default Tasks;
