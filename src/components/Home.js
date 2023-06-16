import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";
import lk from '../assets/icons/linkedin.png';
import gh from '../assets/icons/github.png';

const Home = () => {
    return (
        <section id="home">
            <div className="home-conteneur bg-[var(--background-color)] h-screen flex flex-col justify-center items-center">
                <div className='home-content w-2/3 text-left'>
                    <div className='main-content-left'>
                        <h1>Computer Science Student</h1>
                        <p>I'm Rayan Outili and I'm currently studyin
                             computer science at Universite Côte d'Azur.</p>
                        <span className="flex gap-4 mt-4">
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rayan-outili-8327b024a/">
                                <img className="w-10 h-10" src={lk} alt="LinkedIn Icon" />
                            </a>
                            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/RayanOUTILI">
                                <img className="w-10 h-10" src={gh} alt="Github Icon" />
                            </a>
                        </span>
                    </div>
                    <div className='main-content-right'>
                        <h2>🚧&nbsp;En cours de développement&nbsp;!&nbsp;🚧</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
