import React from 'react';
import "../styles/tailwind.css";

const Menu = () => {
  return (
    <nav className='flex items-center justify-between fixed top-0 left-0 w-full h-auto p-7 pl-10 pr-20 bg-white shadow-md'>
      <h1 className="mr-auto text-xl font-bold text-gray-800">Rayan Outili</h1>
      <ul className="flex list-none space-x-4">
        <li><a className='text-black font-bold no-underline' href="/">Home</a></li>
        <li><a className='text-black font-bold no-underline' href="/portfolio">About</a></li>
        <li><a className='text-black font-bold no-underline' href="/blog">Projects</a></li>
        <li><a className='text-black font-bold no-underline' href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
