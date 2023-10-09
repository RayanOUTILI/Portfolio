import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <section className="container mt-12 bg-black text-white h-[200px] w-[100%] justify-center flex items-center" id="footer">
            <div className="justify-center flex items-center">
                <h2><a href="#home">↑Rayan Outili</a> </h2>
                <p> ©{currentYear} - </p>
            </div>
            <div>
                <p className="block"> Contact : <a href="mailto:rayan.outili@gmail.com">rayan.outili@gmail.com</a></p>
            </div>
        </section>
    )
};

export default Footer;
