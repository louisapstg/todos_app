import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../stores/todoSlice';

const Form = () => {
   const [title, setTitle] = useState('');
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!title) return;
      // let id = uuidv4();
      let temp = {
         // id,
         title
      };
      dispatch(addTodo(temp));
   };

   return (
      <form onSubmit={handleSubmit}>
         <label
            htmlFor="search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Input Todos
         </label>
         <div className="relative">
            <input
               type="search"
               id="search"
               className="block w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 pl-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
               placeholder="Todos Title"
               required
               name={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <button
               type="submit"
               className="absolute right-2.5 bottom-2.5 rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Add
            </button>
         </div>
      </form>
   );
};

export default Form;
