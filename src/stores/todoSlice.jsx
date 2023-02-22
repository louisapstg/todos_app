import { createSlice } from '@reduxjs/toolkit';

const initialValues = [];

export const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todo: initialValues
   },
   reducers: {
      addTodo: (state, action) => {
         state.todo = [...state.todo, action.payload];
      }
   }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
