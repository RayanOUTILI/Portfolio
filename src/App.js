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
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);

export default App;