import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import './styles/tailwind.css';

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
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById('root')).render(<App />);

export default App;