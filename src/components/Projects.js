import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import js from "../assets/icons/js.png";
import code from "../assets/icons/code.png";
import link from "../assets/icons/link.png";
import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwindcss.png";
import geometrydash from "../assets/img/geometrydash.png";

const projectsData = [
    {
        title: "WorldLearning",
        description: "Projet sous forme de site web proposant de nombreux mini-jeux basés sur les pays du monde.",
        url: "https://rayanoutili.github.io/WorldLearning/",
        githubUrl: "https://github.com/RayanOUTILI/WorldLearning",
        imageSrc: "/assets/img/worldlearning.png",
        techno: [html, css, js]
    },
    {
        title: "Convertisseur d'images",
        description: "Page web permettant à l'utilisateur de sélectionner une image et lui appliquer un traitement.",
        url: "https://rayanoutili.github.io/convertisseurImages/",
        githubUrl: "https://github.com/RayanOUTILI/convertisseurImages",
        techno: [html, css, c, python]
    },
    {
        title: "Enquête écologique",
        description: "Site web proposant une enquête aux entreprises de Nice sur leurs pratiques écologiques - réalisé en collaboration.",
        url: "https://rayanoutili.github.io/site-ecologie/",
        githubUrl: "https://github.com/RayanOUTILI/site-ecologie",
        techno: [html, css]
    },
    {
        title: "Moviedle",
        description: "Page web permettant de deviner des films à partir d'une affiche floutée - réalisé en collaboration.",
        url: "https://ThomasPorteletteGit.github.io/MoviedleREWORK/",
        githubUrl: "https://github.com/ThomasPorteletteGit/MoviedleREWORK",
        techno: [html, css, js]
    },
    {
        title: "Portfolio",
        description: "Mon Portfolio développé en ReactJS.",
        url: "https://rayan-outili.fr",
        githubUrl: "https://github.com/RayanOUTILI/Portfolio",
        techno: [html, css, js, react, tailwind]
    }
];

const PythonProjects = [
    {
        title: "Geometry dash",
        description: "Programme utilisant le module Turtle de Python pour réaliser un visuel du jeu Geometry Dash.",
        url: [geometrydash],
        githubUrl: "https://github.com/RayanOUTILI/GeometryDashTurtle",
        techno: [python]
    }
]

const Projects = () => {
    return (
        <section id="projets">
            {/* f9f9f9 */}
            <div className="projets-conteneur bg-[white]">
                <div className="padleft mt-20">
                    <h1 className="title-trait text-4xl font-bold text-left ml-14 mt-24 pt-4 mb-2">Projets</h1>
                    {projectsData.map((project, index) => (
                        //revealxINDEX pour alterner les anim revealx${index+1}
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (iframe) */}
                            <div className="gauche w-65% relative">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <iframe id="iframe" title={project.title} className="iframe w-[40vw] h-[40vh] m-[3%]" src={project.url} alt={project.title} />
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="techno flex justify-start gap-4 mt-4">
                                    {project.techno.map((techno, index) => (
                                        <img className="h-[38px] w-[38px]" src={techno} alt="techno" key={index} />
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link  flex items-center">
                                        <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                        Site
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                    {/* python project img /- iframe */}
                    {PythonProjects.map((project, index) => (
                        //revealxINDEX pour alterner les anim revealx${index+1}
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (iframe) */}
                            <div className="gauche w-65% relative">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <img src={project.url} id="iframe" title={project.title} className="iframe w-[100vw] h-[40vh] m-[3%]" alt={project.title} />
                                    {console.log(project.url)}
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="techno flex justify-start gap-4 mt-4">
                                    {project.techno.map((techno, index) => (
                                        <img className="h-[38px] w-[38px]" src={techno} alt="techno" key={index} />
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link  flex items-center">
                                        <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                        Site
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;
