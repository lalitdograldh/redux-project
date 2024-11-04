import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};
const initialState = {
  task: loadTasksFromLocalStorage(),
  isLoading: false,
};

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    deleteTask(state, action) {
      state.task = state.task.filter(
        (curTask, index) => index !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
    clearTask(state) {
      state.task = [];
      localStorage.setItem("tasks", JSON.stringify(state.task));
    },
  },
});
export const { addTask, deleteTask, clearTask } = taskReducer.actions;
export default taskReducer.reducer 