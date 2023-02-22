import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CardList from './components/CardList';

const App = () => {
   const [theme, setTheme] = useState(null);

   useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         setTheme('dark');
      } else {
         setTheme('light');
      }
   }, []);

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [theme]);

   const handleSwitch = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
   };

   return (
      <div>
         <Navbar toggleDark={handleSwitch} />
         <div className="mx-auto mt-28 w-3/4 sm:w-2/4 lg:w-1/4">
            <Form />
         </div>
         <div>
            <CardList />
         </div>
      </div>
   );
};

export default App;
