import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Menu />
      <Home />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}

    </>
  );
};
 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;