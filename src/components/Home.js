import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";
import lk from '../assets/icons/linkedin.png';
import gh from '../assets/icons/github.png';

const Home = () => {
    return (
        <section id="home">
            <div className="bg-[#f9f9f9] h-screen flex flex-col justify-center items-center">
                <div className='home-content w-2/3 text-left'>
                    <div className='main-content-left'>
                        <h1>Computer Science Student</h1>
                        <p>I'm Rayan Outili and I'm currently studying computer science at Universite Côte d'Azur.</p>
                        <span className="flex gap-4 mt-4">
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                <img className="w-10 h-10" src={lk} alt="LinkedIn Icon" />
                            </a>
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                <img className="w-10 h-10" src={gh} alt="LinkedIn Icon" />
                            </a>
                        </span>
                    </div>
                    <div className='main-content-right'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi nec nunc commodo placerat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
