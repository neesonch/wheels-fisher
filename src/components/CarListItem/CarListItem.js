import React from 'react';
import * as keys from 'Constants/car-keys.js';
import { useHistory } from "react-router-dom";
import { Card, Typography, Button } from '@material-ui/core';
import { useStyles } from './CarListItem.styles';

const CarListItem = (props) => {

  const { car } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleCarSelection = (carId) => history.push(`/car/${carId}`);

  return (
    <Card className={classes.cardRoot}>
      <Typography variant="h5">{car[keys.NAME]}</Typography>
      <Typography variant="subtitle2">{car[keys.VENDOR_NAME]}</Typography>
      <Typography variant="body1">{car[keys.STATUS]} @ ${car[keys.ESTIMATED_TOTAL_AMOUNT]}</Typography>
      <Button variant="contained" onClick={() => handleCarSelection(car.uid)}>View car</Button>
    </Card >
  )
}

export default CarListItem;