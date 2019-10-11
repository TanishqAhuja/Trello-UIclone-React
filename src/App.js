import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Boards from './Components/Boards';
import Lists from './Components/Lists';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='(/|/Boards)'>
        <Boards />
      </Route>
      <Route path='/Boards/:id'
        render={
          ({ match }) => (
            <Lists match={match} />
          )}
      >
      </Route>
    </BrowserRouter>
  );
}

export default App;
