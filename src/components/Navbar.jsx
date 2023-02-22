import React from 'react';

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleDark }) => {
   return (
      <nav className="fixed top-0 left-0 z-20 w-full bg-slate-50 px-2 py-2.5 dark:bg-gray-900 sm:px-4">
         <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="https://flowbite.com/" className="flex items-center text-3xl">
               <i className="fi fi-brands-slack mr-2 mt-1 dark:text-white"></i>
               <span className="self-center whitespace-nowrap font-semibold dark:text-white">
                  Todos
               </span>
            </a>
            <label className="relative inline-flex cursor-pointer items-center">
               <input type="checkbox" onClick={toggleDark} defaultValue className="peer sr-only" />
               <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
               <span className="ml-3 text-sm font-semibold text-black dark:text-white">
                  Dark Mode
               </span>
            </label>
         </div>
      </nav>
   );
};

export default Navbar;
