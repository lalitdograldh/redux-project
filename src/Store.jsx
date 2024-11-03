// import {applyMiddleware,createStore} from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';
// import {thunk} from 'redux-thunk';
import { configureStore, createSlice } from "@reduxjs/toolkit";

//const ADD_TASK = "task/add";
//const DELETE_TASK = "task/delete";
//const FETCH_TASK = "task/fetch";
const initialState = {
  task: [],
  isLoading: false,
};
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

// old code
//export const store = createStore(taskReducer,composeWithDevTools( applyMiddleware( thunk )));


const taskReducer = createSlice({
  name:"task", 
  initialState,
  reducers : {
    addTask(state,action){
        state.task.push(action.payload)
    },
    deleteTask(state,action){
        state.task = state.task.filter((curTask,index) =>index !== action.payload)
    },
    clearTask(state){
      state.task = []
    }
}
});
export const { addTask,deleteTask,clearTask} = taskReducer.actions;
// new style
export const store = configureStore({
  reducer: {
    taskReducer:taskReducer.reducer,   
  },
});

// console.log(store.getState());
// console.log(store.dispatch(addTask("Buy Apple")));
// console.log(store.dispatch(addTask("Buy Mango")));
// console.log(store.dispatch(addTask("Buy Mango55")));
//console.log(store.dispatch(clearTask()));
//console.log(store.dispatch(deleteTask(1)));
console.log(store.getState());
// export const addTask = (data) => {
//   return { type: ADD_TASK, payload: data };
// };
//store.dispatch(addTask("Buy Apple"));
//console.log("Updated State: ",store.getState());
// store.dispatch({type:ADD_TASK , payload : "Buy Mango"});

// export const deleteTask = (id) => {
//   return { type: DELETE_TASK, payload: id };
// };

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
