import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";

const Home = () => {

    return (
        <section id="home">
            {/* bg-[#f9f9f9] */}
            <div className="bg-[#ffffff] min-h-fit h-[40rem] mt-20">
                <div className='home-conteneur bg-[#f9f9f9] flex justify-center items-center'>
                    <div className='home-content mt-44 flex m-auto w-3/4 h-fit text-left'>
                        <div className='main-content-left flex text-left'>
                            <h1>Computer Science Student</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                        </div>
                        <div className='main-content-right'>
                            <p className='m-w-[20%'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi nec nunc commodo placerat.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;