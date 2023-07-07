import "../styles/index.css";
import "../styles/tailwind.css";
import HTML5 from "../assets/icons/html.png";
import CSS3 from "../assets/icons/css.png";
import JS from "../assets/icons/js.png";
import REACT from "../assets/icons/react.png";
import TAILWIND from "../assets/icons/tailwindcss.png";
import Java from "../assets/icons/java.png";
import Python from "../assets/icons/python.png";
import C from "../assets/icons/c.png";
import Php from "../assets/icons/php.png";
import Sql from "../assets/icons/sql.png";


const About = () => {
    window.addEventListener('scroll', revealOnScroll);

    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }

    return (
        <>
            <section id="about">
                <h1 className="text-4xl font-bold text-left ml-10 mt-24 mb-2">About Me</h1>

                <div className="box-timeline reveal">
                    <div className="ligne"></div>
                    <div className="rond rond1" data-anim="1"></div>
                    <div className="rond rond3" data-anim="3"></div>
                    <div className="box b1" data-anim="1">
                        <h2>Baccalauréat général</h2>
                        <p>Lycée Thierry Maulnier</p>
                        <p>Spécialités : Mathématiques et Sciences informatiques.</p>
                    </div>
                    <div className="box b2" data-anim="2">
                        <h2>BUT Informatique</h2>
                        <p>
                            IUT Nice Côte d'Azur
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center mb-2 mt-6">Front-end</h2>
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

                <h2 className="text-2xl font-bold text-center mb-2 mt-6">Back-end</h2>
                <div className="stacks flex justify-center items-center w-[50%] m-auto">
                    <ul className="flex gap-6">
                        <li data-language="Java">
                            <img src={Java} alt="Java"></img>
                        </li>
                        <li data-language="Python">
                            <img src={Python} alt="Python"></img>
                        </li>
                        <li data-language="C">
                            <img src={C} alt="C"></img>
                        </li>
                        <li data-language="Php">
                            <img src={Php} alt="Php"></img>
                        </li>
                        <li data-language="Sql">
                            <img src={Sql} alt="Sql"></img>
                        </li>
                    </ul>
                </div>
            </section >
        </>
    );
};



export default About;