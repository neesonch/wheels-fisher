import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Paper, Container } from '@material-ui/core';
import TopBar from 'Components/TopBar';
import CarList from 'Components/CarList';
import SelectedCar from 'Components/SelectedCar';
import PickupReturn from 'Components/PickupReturn';



const App = () => (
  <Router>
    <Paper>
      <TopBar />
      <Container maxWidth="md">
        <PickupReturn />
        <Switch>
          <Route path="/car/:carId">
            <SelectedCar />
          </Route>
          <Route path="/">
            <CarList />
          </Route>
        </Switch>
      </Container>
    </Paper>
  </Router>
);

export default App;
