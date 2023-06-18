import "../styles/index.css";
import "../styles/tailwind.css";
import HTML5 from "../assets/icons/html.png";
import CSS3 from "../assets/icons/css.png";
import JS from "../assets/icons/js.png";
import REACT from "../assets/icons/react.png";
import TAILWIND from "../assets/icons/tailwindcss.png";

const About = () => {
    return (
        <>
            <section id="about">
            <h1 className="text-4xl font-bold text-left ml-10 mt-10 mb-2">About Me</h1>
            <h2 className="text-2xl font-bold text-center mb-2">Front-end</h2>
                <div className="stacks flex justify-center items-center w-[50%] m-auto">
                    <ul className="flex gap-6">
                        <li data-language="HTML5">
                            <img src={HTML5} alt="HTML5"></img>
                        </li>
                        <li data-language="CSS3">
                            <img src={CSS3} alt="CSS3"></img>
                        </li>
                        <li data-language="JavaScript">
                            <img src={JS} alt="JavaScript"></img>
                        </li>
                        <li data-language="React">
                            <img src={REACT} alt="React"></img>
                        </li>
                        <li data-language="TailwindCSS">
                            <img src={TAILWIND} alt="TailwindCSS"></img>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )


};

export default About;