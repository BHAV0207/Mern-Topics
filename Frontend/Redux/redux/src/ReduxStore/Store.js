import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../Features/ToDoFeatures/toDoSlice';

export const store = configureStore({
  reducer : todoSlice
});