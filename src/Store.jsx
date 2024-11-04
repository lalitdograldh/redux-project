// import {applyMiddleware,createStore} from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import {thunk} from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";

// new style
export const store = configureStore({
  reducer: {
    taskReducer,   
  },
});

// old code
//const ADD_TASK = "task/add";
//const DELETE_TASK = "task/delete";
//const FETCH_TASK = "task/fetch";

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };
//     case DELETE_TASK:
//       const updatedTask = state.task.filter((curTask, index) => {
//         return index !== action.payload;
//       });
//       return {
//         ...state,
//         task: updatedTask,
//       };
//     case FETCH_TASK:
//       return {
//         ...state,
//         task: [...state.task, ...action.payload],
//       };
//     default:
//       return state;
//   }
// };


//export const store = createStore(taskReducer,composeWithDevTools( applyMiddleware( thunk )));







// export const fetchTask = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(
//         "https://jsonplaceholder.typicode.com/todos?_limit=3"
//       );
//       const task = await res.json();
//       console.log(task);
//       dispatch({
//         type: FETCH_TASK,
//         payload: task.map((curTask) => curTask.title),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
//store.dispatch(deleteTask(1));
//console.log("deleted State: ",store.getState());
