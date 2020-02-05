import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import HomeContainer from './containers/home';
import EquipoContainer from './containers/equipo';
import PortafolioContainer from './containers/portafolio';
import AboutUsContainer from './containers/aboutUs';
import ContactoContainer from './containers/contacto';
import PortafolioIndContainer from './containers/portafolioInd';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route exact path="/equipo">
            <EquipoContainer />
          </Route>
          <Route exact path="/portafolio">
            <PortafolioContainer />
          </Route>
          <Route exact path="/aboutUs">
            <AboutUsContainer />
          </Route>
          <Route exact path="/contacto">
            <ContactoContainer />
          </Route>
          <Route exact path="/portafolioInd">
            <PortafolioIndContainer />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
