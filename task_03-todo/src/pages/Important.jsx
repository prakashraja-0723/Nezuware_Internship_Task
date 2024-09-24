import React from 'react';
import TaskList from '@/Components/task-list/TaskList.jsx';
import InputBox from '@/Components/ui/inputBox.jsx';
import { useSelector } from 'react-redux';
import Header from '@/Components/ui/Header.jsx';
import EmptyList from '@/Components/task-list/emptyList.jsx';
import task_empty from '@/assets/task_empty.png';
import CompletedList from '@/Components/task-list/completedList.jsx';

const Important = () => {
  const TASK_DATA = useSelector((state) => {
    return state.todo.todoList;
  });
  const important = TASK_DATA.filter(
    (task) => task.important === true && task.completed === false,
  );
  return (
    <>
      <div
        className={` w-full flex-1 py-8 overflow-x-clip overflow-y-auto flex items-start flex-col gap-1`}
      >
        {important.length === 0 ? (
          <EmptyList
            description={`Try starring some tasks to see them`}
            asset={task_empty}
          />
        ) : (
          <>
            <TaskList tasks={important} name={'important'} />
          </>
        )}
      </div>
    </>
  );
};
export default Important;
