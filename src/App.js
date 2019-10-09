import React from 'react';
import Header from './Components/Header';
import Boards from './Components/Boards';

function App() {
  return (
    <div className="App">
      <Header heading="Trello"></Header>
      <Boards></Boards>
    </div>
  );
}

export default App;
