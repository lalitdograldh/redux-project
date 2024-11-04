import { store } from "./Store";

console.log(store.getState());
// console.log(store.dispatch(addTask("Buy Apple")));
// console.log(store.dispatch(addTask("Buy Mango")));
//console.log(store.dispatch(clearTask()));
//console.log(store.dispatch(deleteTask(1)));
//console.log(store.getState());
// export const addTask = (data) => {
//   return { type: ADD_TASK, payload: data };
// };
//store.dispatch(addTask("Buy Apple"));
//console.log("Updated State: ",store.getState());
// store.dispatch({type:ADD_TASK , payload : "Buy Mango"});

// export const deleteTask = (id) => {
//   return { type: DELETE_TASK, payload: id };
// };