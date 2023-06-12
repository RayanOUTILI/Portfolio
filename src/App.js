import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';

const App = () => {
  return (
    <Menu />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;