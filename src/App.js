import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <Menu />
      <Home />
    </>
  );
};
 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;