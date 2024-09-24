// Add ,
import { useState } from 'react';
import { addTodo, removeTodo, toggleImportant, toggleMyDay, toggleTodo } from '@/redux/features/todoSlice.js';
import { useDispatch } from 'react-redux';

const useTodo = () => {
  // useDispatch()
  const dispatch = useDispatch();
  
  // input box placeholder
  const [placeholder, setPlaceholder] = useState('Add a task');
  // check task
  const [myDay, setMyDay] = useState(false);
  const [important, setImportant] = useState(false);
  // toggle btn for completed task
  const [toggleCompleted,setToggleCompleted] = useState(false);
  // Add Task to the list
  const [addNewTask, setAddNewTask] = useState({
    id: '',
    myDay: false,
    important: false,
    tasks: false,
    task: '',
    status: '',
    my_day:false,
    completed: false,
  });
  
  // handle saving new task
  const task = (e) => {
    setAddNewTask({
      id: new Date().getTime(),
      myDay: myDay,
      important: important,
      tasks: true,
      completed: false,
      task:
        (e.target.name === 'myDay' ||
          e.target.name === 'important' ||
          e.target.name === 'planned' ||
          e.target.name === 'tasks') &&
        e.target.value,
      my_day: myDay
        ? true
        : important
        ? false
        : e.target.name === 'tasks'
        ? false
        : false,
      status: "in progress",
      
    });
  };
  
  const handleSavingNewTask = (e, name) => {
    e.preventDefault();
    name === 'myDay' && setMyDay(e.target.name === name);
    name === 'important' && setImportant(e.target.name === name);
    task(e);
  };
  
  // press "Enter" to save new task
  const handleEnterToSave = (e) => {
    if (e.key === 'Enter') {
      if (addNewTask.task === '') {
        console.log('Please add a task');
        return {};
      } else {
        dispatch(addTodo(addNewTask));
      }
      setAddNewTask({
        id: '',
        myDay: false,
        important: false,
        tasks: false,
        task: '',
        completed: false,
        status: '',
        
      });
    } else {
      return [];
    }
  };
  // handle focus and blur
  const handleFocus = (e) => {
    setPlaceholder((prevState) =>
      prevState === `Try typing 'pay utilities bill by Friday 6pm'`
        ? 'Add a task'
        : `Try typing 'pay utilities bill by Friday 6pm'`,
    );
  };
  const handleBlur = (e) => {
    setPlaceholder((prevState) =>
      prevState === `Try typing 'pay utilities bill by Friday 6pm'`
        ? 'Add a task'
        : `Try typing 'pay utilities bill by Friday 6pm'`,
    );
  };

  // handle mark important
  const handleMarkImportant = (task) => {
    setImportant(!task.important);
    dispatch(toggleImportant(task.id));
  };

  // handle add my day
  const handleAddMyDay = (task) => {
    setMyDay(!task.myDay);
    dispatch(toggleMyDay(task.id));
  };
  
  // handle completed task
  const handleCompletedTask = (task) => {
    dispatch(toggleTodo(task.id));
  }
  
  // handle delete task
  const handleDeleteTask = (task) => {
    dispatch(removeTodo(task.id));
  }
  
  // handle toggle completed task
  const handleToggleCompleted = () => {
    setToggleCompleted(!toggleCompleted);
  }

  return {
    myDay,
    important,
    toggleCompleted,
    addNewTask,
    placeholder,
    handleSavingNewTask,
    handleEnterToSave,
    handleFocus,
    handleBlur,
    handleMarkImportant,
    handleAddMyDay,
    handleCompletedTask,
    handleDeleteTask,
    handleToggleCompleted
  };
};
export default useTodo;
