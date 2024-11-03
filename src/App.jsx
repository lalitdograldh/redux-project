// import React from 'react';
// import NumbersDivisibleByThree from './NumbersDivisibleByThree';
// import UppercaseCounter from './UppercaseCounter';
// import ToggleParagraph from './ToggleParagraph';
// import DaysSince1969 from './DaysSince1969';

import { useDispatch, useSelector } from "react-redux";
import { Todo } from "./components/Todo";
import { MdDeleteForever, MdOutlineClearAll } from "react-icons/md";
import { useState } from "react";
import { addTask, clearTask, deleteTask } from "./Store";

const App = () => {
  const [userTask, setUserTask] = useState("");
  const tasks = useSelector((state) => state.taskReducer.task);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    return dispatch(deleteTask(id));
  };

  const handleClearTask = () => {
    return dispatch(clearTask());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(userTask));
    return setUserTask("");
  };
  return (
    // <Todo/>
    <div className="container">
      <div className="todo-app">
        <h1>
          <i className="fa-regular fa-pen-to-sqaure"></i>To-do List:
        </h1>
        <div className="row">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="input-box"
              placeholder="Add a new task"
              value={userTask}
              onChange={(e) => setUserTask(e.target.value)}
            />
            <button>Add Task</button>
          </form>
        </div>
        {/* <button onClick={ handleFetchTasks }> Fetch Task</button> */}
        <ul id="list-container">
          {tasks?.map((curTask, index) => {
            return (
              <li key={index}>
                <p>
                  {index} : {curTask}
                </p>
                <div>
                  <MdDeleteForever
                    className="icon-style"
                    onClick={() => handleDelete(index)}
                  ></MdDeleteForever>
                </div>
              </li>
            );
          })}
          <div className="clear-all" onClick={() => handleClearTask()}>
            <MdOutlineClearAll className="icon-style" />
            <span>Clear All</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default App;

//console.log(React.createElement("h1",null,"Lalit"));
