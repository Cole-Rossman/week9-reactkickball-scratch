import './App.css';
import React, { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavHeader from './components/Controls/NavHeader';
import Home from './views/Home/Home';
import Players from './views/Players/Players';
import PlayerDetail from './views/Players/PlayerDetail';
import Teams from './views/Teams/Teams';
import TeamDetail from './views/Teams/TeamDetail';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
          <Route path="/players/:id">
            <PlayerDetail />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route path="/teams/:id">
            <TeamDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
