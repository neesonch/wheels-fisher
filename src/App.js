import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TopBar from 'Components/TopBar';
import CarList from 'Components/CarList';
import SelectedCar from 'Components/SelectedCar';



const App = () => (
  <Router>
    <TopBar />
    <Switch>
      <Route path="/car/:carId">
        <SelectedCar />
      </Route>
      <Route path="/">
        <CarList />
      </Route>
    </Switch>

  </Router>
);

export default App;
