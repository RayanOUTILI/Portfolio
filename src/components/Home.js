import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";

const Home = () => {

    return (
        <section id="home">
            {/* bg-[#f9f9f9] */}
            <div className="bg-[#ea3535] min-h-fit h-[40rem] mt-20">
                <div className='home-conteneur bg-[#b4d75b] m-auto w-3/4 h-fit flex justify-center items-center'>
                    <div className='home-content mt-4 flex text-left'>
                        <div className='main-content mt-4 flex text-left'>
                            <h1>Computer Science Student</h1>
                        </div>
                        <div className='main-content mt-4 flex text-left'>
                            <h1>Computer Science Student</h1>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;