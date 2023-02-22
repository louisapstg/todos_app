import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const CardList = () => {
   const todos = useSelector((state) => state.todos.todo);

   return (
      <div className="grid grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-4 2xl:grid-cols-4">
         {todos.map((todo) => {
            <Card key={todo.id} todo={todo} />;
         })}
      </div>
   );
};

export default CardList;
