import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CarList from 'Components/CarList/Carlist';


const App = () => (
  <Router>
    <Switch>
      <Route path="/car">
        <div>Specific car</div>
      </Route>
      <Route path="/">
        <CarList />
      </Route>
    </Switch>

  </Router>
);

export default App;
