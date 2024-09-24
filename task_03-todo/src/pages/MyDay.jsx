import React from 'react';
import { useSelector } from 'react-redux';
import EmptyList from '@/Components/task-list/emptyList.jsx';

import task_empty from '@/assets/task_empty.png';
import TaskList from '@/Components/task-list/TaskList.jsx';
import CompletedList from '@/Components/task-list/completedList.jsx';

const MyDay = () => {
  const TASK_DATA = useSelector((state) => {
    return state.todo.todoList;
  });
  const myDay = TASK_DATA.filter(
    (task) => task.myDay === true && task.completed === false,
  );
  const myDay_completed = TASK_DATA.filter(
    (task) => task.myDay === true && task.completed === true,
  );

  return (
    <>
      <div
        className={` w-full flex-1 py-8 overflow-x-clip overflow-y-auto flex items-start flex-col gap-1`}
      >
        {TASK_DATA.filter((task) => task.myDay === true).length === 0 ? (
          <EmptyList
            title={'Focus on your day'}
            description={`Get things done with My Day, a list that refreshes every day.`}
            asset={task_empty}
          />
        ) : (
          <>
            <TaskList tasks={myDay} name={'myDay'} />
            <CompletedList tasks={myDay_completed} name={'myDay'} />
          </>
        )}
      </div>
    </>
  );
};
export default MyDay;
