import React from 'react';
import * as keys from 'Constants/car-keys.js';
import { Card, Typography } from '@material-ui/core';
import { useStyles } from './CarListItem.styles';

const CarListItem = (props) => {

  const { car } = props;
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot}>
      <Typography variant="h5">{car.[keys.NAME]}</Typography>
      <div key={car.uid}>{car.[keys.STATUS]}</div>
    </Card>
  )
}

export default CarListItem;