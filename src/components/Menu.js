import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";
import { Link } from 'react-router-dom';

const Menu = ({ toggleDarkMode }) => {
	return (
		<nav id="menu" className='bg-[var(--background-menu-color)] flex z-50 items-center justify-between fixed top-0 left-0 w-full h-20 p-7 pl-10 pr-20 shadow-md'>
			<h1 className="mr-auto taille font-bold ">Rayan Outili</h1>
			<ul className="flex list-none space-x-4">
				<li>
					<Link to="" onClick={(e) => e.preventDefault()}>Home</Link>
				</li>
				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					{/* provisoirement */}
					<Link to="" onClick={(e) => e.preventDefault()}>Projects</Link>
				</li>
				<li>
					{/* provisoirement */}
					<Link to="" onClick={(e) => e.preventDefault()}>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
