import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import './styles/tailwind.css';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact'
import { useEffect } from 'react';


const App = () => {

  const isDarkModeEnabled = () => {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  };

  const userPrefersDarkMode = isDarkModeEnabled();
  const [isDarkMode, setIsDarkMode] = useState(userPrefersDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    let elements;
    const cursor = document.querySelector(".cursor");

    if (cursor) {
      document.addEventListener('mousemove', e => {
        cursor.style.top = (e.pageY - 20) + "px";
        cursor.style.left = (e.pageX - 20) + "px";
      });

      let elements = document.querySelectorAll("a, .link");

      elements.forEach(element => {
        element.addEventListener("mouseover", function (event) {
          cursor.classList.add("red");
        });

        element.addEventListener("mouseout", function (event) {
          cursor.classList.remove("red");
        });
      });
    }

    return () => {
      document.removeEventListener('mousemove', () => { });
      elements.forEach(element => {
        element.removeEventListener("mouseover", () => { });
        element.removeEventListener("mouseout", () => { });
      });
    };
  }, []);


  return (
    <>
      <BrowserRouter>
        <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
          <Menu toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<><Home /><Projects /><Footer /></>} />
            <Route path="/Home" element={<><Home /><Projects /><Footer /></>} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Footer" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className='cursor'></div>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);

export default App;