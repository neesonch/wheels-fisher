import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Paper, Container } from '@material-ui/core';
import TopBar from 'Components/TopBar';
import CarList from 'Components/CarList';
import SelectedCar from 'Components/SelectedCar';



const App = () => (
  <Router>
    <Paper>
      <TopBar />
      <Container maxWidth="md">
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
