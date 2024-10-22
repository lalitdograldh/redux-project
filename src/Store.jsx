import {createStore} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
    task : [],
    isLoading : false
}
const taskReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                task:[...state.task,action.payload]
            }
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask , index) =>{
                return index !== action.payload;

            });
            return{
                ...state,
                task:updatedTask
            }
        default : 
            return state;
    } 
}

export const store = createStore(taskReducer,composeWithDevTools());

export const addTask = (data)=> {
    return {type:ADD_TASK , payload : data}
}
store.dispatch(addTask("Buy Apple"));
//console.log("Updated State: ",store.getState());
// store.dispatch({type:ADD_TASK , payload : "Buy Mango"});

export const deleteTask = (id) =>{
    return {type:DELETE_TASK , payload : id}
}
//store.dispatch(deleteTask(1));
//console.log("deleted State: ",store.getState());
