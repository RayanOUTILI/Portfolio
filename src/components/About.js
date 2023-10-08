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
    window.addEventListener('scroll', revealOnScrollXgauche);
    window.addEventListener('scroll', revealOnScrollXdroite);

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
    // stacks front
    function revealOnScrollXgauche() {
        var reveals = document.querySelectorAll('.revealx1');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }
    // back r
    function revealOnScrollXdroite() {
        var reveals = document.querySelectorAll('.revealx2');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 0;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    }

    return (
        <>
            <section id="about">
                <div className="bg-[#f2f7fc]">
                    <h1 className="text-4xl font-bold text-left ml-10 mt-24 pt-4 mb-2">A propos</h1>

                    <div className="about-p-t flex">

                        <div className="about-p pl-[20px] pr-[20px] pb-[20px] w-[40%] h-[80%] ml-[2%] mr-[5%] mt-[10px] revealx1">
                            <p>Je m'appelle Rayan Outili, j'ai 18 ans et je suis étudiant en informatique.</p>
                            <p>J'ai eu mon Baccalauréat en 2022 avec comme spécialité Numérique et sciences informatiques. Cela m'a permis de me rendre compte que je voulais continuer dans cette branche.</p>
                            <p>J'ai donc fait mon entrée en études supérieures en BUT Informatique à l'IUT de Nice pour me consacrer pleinement à ce domaine.</p>
                        </div>

                        <div className="box-timeline reveal">
                            <div className="ligne"></div>
                            <div className="rond rond1" data-anim="1"></div>
                            <div className="rond rond3" data-anim="3"></div>
                            <div className="box b1" data-anim="1">
                                <h2>Baccalauréat général - 2022</h2>
                                <p>Lycée Thierry Maulnier</p>
                                <p>Spécialités : Mathématiques et Sciences informatiques.</p>
                                <p>Mention très bien</p>
                            </div>
                            <div className="box b2" data-anim="2">
                                <h2>BUT Informatique</h2>
                                <p>
                                    IUT Nice Côte d'Azur
                                </p>
                                <p>
                                    Parcours : réalisation d'applications.
                                </p>
                                <p>
                                    BUT1 : validé  -  BUT2 : en cours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden pb-12">
                    <h2 className="text-2xl font-bold text-center mb-2 mt-6">Front-end</h2>
                    <div className="stacks flex justify-center items-center w-[50%] m-auto revealx1">
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
                    <div className="stacks flex justify-center items-center w-[50%] m-auto revealx2">
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
                </div>
            </section >
        </>
    );
};



export default About;