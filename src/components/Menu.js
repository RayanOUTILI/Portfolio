import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";

const Menu = () => {
  return (
    <nav className='flex items-center justify-between fixed top-0 left-0 w-full h-20 p-7 pl-10 pr-20 bg-white shadow-md'>
      <h1 className="mr-auto taille font-bold text-gray-800">Rayan Outili</h1>
      <ul className="flex list-none space-x-4">
        <li><a href="/">Home</a></li>
        <li><a href="/portfolio">About</a></li>
        <li><a href="/blog">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
