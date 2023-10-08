import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <section id="footer">
            <div className="container mt-12 bg-black text-white  h-[200px] w-[100%] justify-center flex items-center">
            <h2>↑Rayan Outili </h2>
            <p> ©{currentYear}</p>

            </div>
        </section>
    )
};

export default Footer;
